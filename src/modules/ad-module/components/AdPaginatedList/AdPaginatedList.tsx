/**
 * A component for displaying a paginated list of advertisements.
 * @module components
 * @component
 * @example
 * import { AdPaginatedList } from "@/components";
 *
 * const MyComponent = () => {
 *   const adsData = [
 *     {
 *       id: "123",
 *       from_time: "2024-03-15T08:00:00",
 *       to_time: "2024-03-16T08:00:00",
 *       image: "https://example.com/image.jpg",
 *       video: "https://example.com/video.mp4",
 *     },
 *     // Add more ad data objects as needed
 *   ];
 *   const currentPage = 1;
 *   const totalPages = 5;
 *
 *   const handlePageChange = (page: number) => {
 *     console.log("Page changed:", page);
 *     // Perform actions based on the new page
 *   };
 *
 *   return (
 *     <AdPaginatedList
 *       ads={adsData}
 *       currentPage={currentPage}
 *       pagesCount={totalPages}
 *       onPageChange={handlePageChange}
 *     />
 *   );
 * }
 */
import { Box } from "@mui/material";
import { IAd } from "../../types";
import { AdsList } from "../AdsList";
import { AppMessage, AppPagination } from "@/modules/ui";

/**
 * Props for the `AdPaginatedList` component.
 */
interface AdPaginatedListProps {
	/**
	 * An array of advertisement objects.
	 */
	ads: IAd[];

	/**
	 * The total number of pages.
	 */
	pagesCount: number;

	/**
	 * The current page number.
	 */
	currentPage: number;

	/**
	 * A callback function invoked when the page changes.
	 * @param {number} page - The new page number.
	 */
	onPageChange: (page: number) => void;
}

/**
 * A component for displaying a paginated list of advertisements.
 * @param {AdPaginatedListProps} props - The props for the component.
 * @returns {JSX.Element} A React component representing the paginated list.
 */
export function AdPaginatedList({
	ads,
	currentPage,
	pagesCount,
	onPageChange,
}: AdPaginatedListProps): JSX.Element {
	return (
		<Box
			component="section"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 3,
			}}
		>
			{ads.length > 0 && (
				<>
					<AdsList ads={ads} />
					<AppPagination
						pagesCount={pagesCount}
						currentPage={currentPage}
						onPageChange={onPageChange}
					/>
				</>
			)}
			{ads.length === 0 && <AppMessage>No ads found</AppMessage>}
		</Box>
	);
}
