import { AppSigninButton } from "@/modules/auth";
import { Box, Container } from "@mui/material";

export function SigninPage() {
	return (
		<Container maxWidth="sm">
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				gap={2}
				py={5}
				height="100vh"
			>
				<AppSigninButton />
			</Box>
		</Container>
	);
}
