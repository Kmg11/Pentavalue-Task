import { AdCard } from "./AdCard";
import { IAd } from "../../types";
import { renderWithProviders } from "@/core/test";

describe("AdCard", () => {
	test("renders advertisement card with provided data", () => {
		const adData: IAd = {
			id: 1,
			from_time: "2024-03-15T08:00:00",
			to_time: "2024-03-16T08:00:00",
			image: "https://example.com/image.jpg",
			video: "https://example.com/video.mp4",
		};

		const { getByText, getByRole, getByTestId } = renderWithProviders(
			<AdCard {...adData} />
		);

		expect(getByText(/from/i)).toBeInTheDocument();
		expect(getByText(/to/i)).toBeInTheDocument();
		expect(getByRole("img")).toBeInTheDocument();
		expect(getByTestId("ad-video")).toBeInTheDocument();
	});
});
