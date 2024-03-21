import { AdsTimeline } from "@/modules/ad-module";
import { Box, Container } from "@mui/material";

export function DashboardHomePage() {
	return (
		<Container maxWidth="sm">
			<Box display="flex" justifyContent="center" gap={2} py={5}>
				<AdsTimeline />
			</Box>
		</Container>
	);
}
