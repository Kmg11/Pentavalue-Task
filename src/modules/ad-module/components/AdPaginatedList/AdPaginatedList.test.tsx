import { screen } from "@testing-library/react";
import { AdPaginatedList } from "./AdPaginatedList";
import { renderWithProviders } from "@/core/test";
import { IAd } from "../../types";

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

describe("AdPaginatedList", () => {
	test("renders ads and pagination correctly", () => {
		const currentPage = 1;
		const totalPages = 1;
		const handlePageChange = jest.fn();

		renderWithProviders(
			<AdPaginatedList
				ads={adsData}
				currentPage={currentPage}
				pagesCount={totalPages}
				onPageChange={handlePageChange}
			/>
		);

		// Check if ads are rendered
		const adElements = screen.getAllByRole("article");
		expect(adElements).toHaveLength(adsData.length);

		// Check if pagination is rendered
		const paginationElement = screen.getByRole("navigation");
		expect(paginationElement).toBeInTheDocument();
	});

	test('renders "No ads found" message when ads array is empty', () => {
		const emptyAdsData: IAd[] = [];
		const currentPage = 1;
		const totalPages = 5;
		const handlePageChange = jest.fn();

		renderWithProviders(
			<AdPaginatedList
				ads={emptyAdsData}
				currentPage={currentPage}
				pagesCount={totalPages}
				onPageChange={handlePageChange}
			/>
		);

		const noAdsMessage = screen.getByText("No ads found");
		expect(noAdsMessage).toBeInTheDocument();
	});
});
