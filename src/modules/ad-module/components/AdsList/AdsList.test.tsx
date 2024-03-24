import { screen } from "@testing-library/react";
import { AdsList } from "./AdsList";
import { renderWithProviders } from "@/core/test";
import { IAd } from "../..";

describe("AdsList", () => {
	test("renders a list of advertisements", () => {
		const adsData: IAd[] = [
			{
				id: 1,
				from_time: "2024-03-15T08:00:00",
				to_time: "2024-03-16T08:00:00",
				image: "https://example.com/image.jpg",
				video: "https://example.com/video.mp4",
			},
			{
				id: 2,
				from_time: "2024-03-17T08:00:00",
				to_time: "2024-03-18T08:00:00",
				image: "https://example.com/image2.jpg",
				video: "https://example.com/video2.mp4",
			},
		];

		renderWithProviders(<AdsList ads={adsData} />);

		const adElements = screen.getAllByRole("article");
		expect(adElements).toHaveLength(adsData.length);
	});
});
