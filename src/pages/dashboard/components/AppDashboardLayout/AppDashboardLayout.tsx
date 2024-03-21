import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar";

export function AppDashboardLayout() {
	return (
		<Container maxWidth="md">
			<TopBar />

			<Box
				paddingTop={5}
				paddingBottom={5}
				display="flex"
				justifyContent="center"
			>
				<Outlet />
			</Box>
		</Container>
	);
}
