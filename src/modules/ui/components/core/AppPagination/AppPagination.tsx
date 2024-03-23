/**
 * A pagination component for navigating through pages.
 * @module components
 * @component
 * @example
 * import { AppPagination } from "@/components";
 *
 * const MyComponent = () => {
 *   const totalPages = 10;
 *   const currentPage = 1;
 *
 *   const handlePageChange = (page: number) => {
 *     console.log("Page changed:", page);
 *     // Perform actions based on the new page
 *   };
 *
 *   return (
 *     <AppPagination
 *       pagesCount={totalPages}
 *       currentPage={currentPage}
 *       onPageChange={handlePageChange}
 *     />
 *   );
 * }
 */
import { Pagination } from "@mui/material";

/**
 * Props for the `AppPagination` component.
 */
interface AppPaginationProps {
	/**
	 * Total number of pages.
	 */
	pagesCount: number;

	/**
	 * Current page number.
	 */
	currentPage: number;

	/**
	 * Callback function invoked when the page changes.
	 * @param {number} page - The new page number.
	 */
	onPageChange: (page: number) => void;
}

/**
 * A pagination component for navigating through pages.
 * @param {AppPaginationProps} props - The props for the component.
 * @returns {JSX.Element} A React component representing the pagination.
 */
export function AppPagination({
	currentPage,
	onPageChange,
	pagesCount,
}: AppPaginationProps): JSX.Element {
	return (
		<Pagination
			count={pagesCount}
			page={currentPage}
			shape="rounded"
			color="primary"
			onChange={(_, page) => onPageChange(page)}
		/>
	);
}
