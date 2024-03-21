import { IAd } from "@/modules/ad-module";
import { Box, IconButton } from "@mui/material";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";
import { AdCardHeaderTime } from "./AdCardHeaderTime/AdCardHeaderTime";

type AdCardHeaderProps = Pick<IAd, "id" | "from_time" | "to_time">;

export function AdCardHeader({ from_time, to_time }: AdCardHeaderProps) {
	const formattedFromTime = new Date(from_time).toLocaleString("en-GB");
	const formattedToTime = new Date(to_time).toLocaleString("en-GB");

	return (
		<Box
			component="header"
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				gap: 1,
				marginBottom: 2,
				flexWrap: "wrap",
				flexDirection: { xs: "column", sm: "row" },
			}}
		>
			<Box
				component="section"
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 1,
					flexDirection: { xs: "column", sm: "row" },
				}}
			>
				<AdCardHeaderTime>From: {formattedFromTime}</AdCardHeaderTime>
				<AdCardHeaderTime>To: {formattedToTime}</AdCardHeaderTime>
			</Box>

			<Box
				component="section"
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 1,
				}}
			>
				<IconButton size="small">
					<EditOutlined fontSize="small" />
				</IconButton>

				<IconButton size="small">
					<DeleteOutline fontSize="small" />
				</IconButton>
			</Box>
		</Box>
	);
}
