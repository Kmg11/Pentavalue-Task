import { AppLogoutButton } from "@/modules/auth";
import { Box, Typography } from "@mui/material";

export function TopBar() {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			paddingRight={2}
			paddingLeft={2}
			paddingTop={1}
			paddingBottom={1}
			borderRadius={(t) => t.shape.borderRadius}
			marginTop={3}
			sx={(t) => ({ backgroundColor: t.palette.grey[900] })}
		>
			<Typography component="h1" variant="h6">
				Dashboard
			</Typography>

			<AppLogoutButton size="small" />
		</Box>
	);
}
