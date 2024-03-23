import { AdForm, AdsTimeline } from "@/modules/ad-module";
import { Box } from "@mui/material";

export function DashboardHomePage() {
	return (
		<Box maxWidth="sm" display="flex" flexDirection="column" gap={2} flex={1}>
			<AdForm />
			<AdsTimeline />
		</Box>
	);
}
