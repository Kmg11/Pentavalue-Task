/**
 * A card component for displaying advertisement information.
 * @module components
 * @component
 * @example
 * import { AdCard } from "@/components";
 *
 * const MyComponent = () => {
 *   const adData = {
 *     id: "123",
 *     from_time: "2024-03-15T08:00:00",
 *     to_time: "2024-03-16T08:00:00",
 *     image: "https://example.com/image.jpg",
 *     video: "https://example.com/video.mp4",
 *   };
 *
 *   return (
 *     <AdCard {...adData} />
 *   );
 * }
 */
import { Box } from "@mui/material";
import { IAd } from "../../types";
import { AdCardHeader } from "./AdCardHeader";
import { AdCardBody } from "./AdCardBody";

/**
 * Props for the `AdCard` component.
 */
interface AdCardProps extends IAd {}

/**
 * A card component for displaying advertisement information.
 * @param {AdCardProps} props - The props for the component.
 * @returns {JSX.Element} A React component representing the advertisement card.
 */
export function AdCard({
	id,
	from_time,
	to_time,
	image,
	video,
}: AdCardProps): JSX.Element {
	return (
		<Box
			component="article"
			sx={(t) => ({
				backgroundColor: t.palette.grey[900],
				borderRadius: t.shape.borderRadius,
				boxShadow: t.shadows[1],
				padding: t.spacing(2),
				width: "100%",
			})}
		>
			<AdCardHeader
				from_time={from_time}
				to_time={to_time}
				id={id}
				image={image}
				video={video}
			/>

			<AdCardBody image={image} video={video} />
		</Box>
	);
}
