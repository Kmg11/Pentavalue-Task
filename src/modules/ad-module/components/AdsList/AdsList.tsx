/**
 * A list component for displaying a list of advertisements.
 * @module components
 * @component
 * @example
 * import { AdsList } from "@/components";
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
 *
 *   return (
 *     <AdsList ads={adsData} />
 *   );
 * }
 */
import { Box } from "@mui/material";
import { IAd } from "../../types";
import { AdCard } from "../AdCard";

/**
 * Props for the `AdsList` component.
 */
interface AdsListProps {
	/**
	 * An array of advertisement objects.
	 */
	ads: IAd[];
}

/**
 * A list component for displaying a list of advertisements.
 * @param {AdsListProps} props - The props for the component.
 * @returns {JSX.Element} A React component representing the advertisement list.
 */
export function AdsList({ ads }: AdsListProps): JSX.Element {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
				width: "100%",
			}}
		>
			{ads.map((ad) => (
				<AdCard key={ad.id} {...ad} />
			))}
		</Box>
	);
}
