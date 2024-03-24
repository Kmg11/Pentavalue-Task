import { screen, waitFor } from "@testing-library/react";
import { AdsTimeline } from "./AdsTimeline";
import { renderWithProviders } from "@/core/test";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { IGetAdsResponse } from "@/core/store";

const response: IGetAdsResponse = {
	message: "Success",
	data: {
		allPages: 1,
		thisPage: 1,
		count: 2,
		result: [
			{
				id: 1,
				from_time: "2022-01-01T00:00:00Z",
				to_time: "2022-01-01T00:00:00Z",
				image: "https://example.com/image.jpg",
				video: "",
			},
			{
				id: 2,
				from_time: "2022-01-01T00:00:00Z",
				to_time: "2022-01-01T00:00:00Z",
				image: "",
				video: "https://example.com/video.mp4",
			},
		],
	},
};

export const handlers = [
	http.get("https://ads-back.shutterstudio.io/ads", async () => {
		await delay(150);
		return HttpResponse.json(response);
	}),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("AdsTimeline", () => {
	test("renders ads list when ads are loaded", async () => {
		renderWithProviders(<AdsTimeline />);

		await waitFor(() => {
			const adElements = screen.getAllByRole("article");
			expect(adElements).toHaveLength(response.data.result.length);
		});
	});

	test("renders loading spinner while fetching ads", async () => {
		renderWithProviders(<AdsTimeline />);

		const loadingSpinner = screen.getByRole("progressbar");
		expect(loadingSpinner).toBeInTheDocument();
	});

	test("renders error message if ads fetching fails", async () => {
		server.use(
			http.get("https://ads-back.shutterstudio.io/ads", async () => {
				await delay(150);
				return HttpResponse.error();
			})
		);

		renderWithProviders(<AdsTimeline />);

		await waitFor(() => {
			const errorMessage = screen.getByText("Network Error");
			expect(errorMessage).toBeInTheDocument();
		});
	});
});
