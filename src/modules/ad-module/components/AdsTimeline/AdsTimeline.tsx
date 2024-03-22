/**
 * A component for displaying a timeline of advertisements.
 * @module components
 * @component
 * @example
 * import { AdsTimeline } from "@/components";
 *
 * const MyComponent = () => {
 *   return (
 *     <AdsTimeline />
 *   );
 * }
 */
import { useCallback, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import {
	adsSelectors,
	fetchAds,
	useAppDispatch,
	useAppSelector,
} from "@/core/store";
import { AdPaginatedList } from "..";
import { AppMessage } from "@/modules/ui";

/**
 * A component for displaying a timeline of advertisements.
 * @returns {JSX.Element} A React component representing the ads timeline.
 */
export function AdsTimeline(): JSX.Element {
	const dispatch = useAppDispatch();
	const ads = useAppSelector(adsSelectors.selectAds);
	const loading = useAppSelector(adsSelectors.selectLoading);
	const error = useAppSelector(adsSelectors.selectError);

	/**
	 * Fetches advertisements data for the specified page.
	 * @param {number} page - The page number to fetch ads for.
	 */
	const fetchAdsData = useCallback(
		(page: number) => {
			dispatch(fetchAds({ page, limit: 10 }));
		},
		[dispatch]
	);

	useEffect(() => {
		fetchAdsData(1);
	}, [fetchAdsData]);

	if (loading) return <CircularProgress />;
	if (error) return <AppMessage color="red">{error}</AppMessage>;

	return (
		<AdPaginatedList
			ads={ads.result}
			currentPage={ads.thisPage}
			pagesCount={ads.allPages}
			onPageChange={(page) => fetchAdsData(page)}
		/>
	);
}
