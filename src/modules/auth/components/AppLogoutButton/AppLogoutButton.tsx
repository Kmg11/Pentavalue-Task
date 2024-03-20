/**
 * A button component for logging out a user.
 * @module components
 * @component
 * @example
 * import { AppLogoutButton } from "@/components";
 *
 * const MyComponent = () => {
 *   return (
 *     <AppLogoutButton />
 *   );
 * }
 */
import { Button } from "@mui/material";
import { authActions, useAppDispatch } from "@/core/store";
import { useNavigate } from "react-router-dom";

/**
 * Component for logging out a user.
 * @returns {JSX.Element} A React component representing the logout button.
 */
export function AppLogoutButton(): JSX.Element {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const signOut = () => {
		dispatch(authActions.logout());
		navigate("/auth/signin", { replace: true });
	};

	return (
		<Button variant="contained" color="primary" onClick={signOut}>
			Logout
		</Button>
	);
}
