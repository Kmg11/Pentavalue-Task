import { Box } from "@mui/material";

interface AdCardBodyProps {
	image?: string;
	video?: string;
}

export function AdCardBody({ image, video }: AdCardBodyProps) {
	return (
		<Box component="section" sx={{ width: "100%" }}>
			{image && (
				<img src={image} style={{ width: "100%", objectFit: "contain" }} />
			)}
			{video && <video src={video} style={{ width: "100%" }} controls />}
		</Box>
	);
}
