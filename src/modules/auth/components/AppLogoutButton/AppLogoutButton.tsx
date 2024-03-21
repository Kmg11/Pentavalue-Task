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
import { Button, ButtonProps } from "@mui/material";
import { authActions, useAppDispatch } from "@/core/store";
import { useNavigate } from "react-router-dom";

interface AppLogoutButtonProps extends ButtonProps {}

/**
 * Component for logging out a user.
 * @returns {JSX.Element} A React component representing the logout button.
 */
export function AppLogoutButton(props: AppLogoutButtonProps): JSX.Element {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const signOut = () => {
		dispatch(authActions.logout());
		navigate("/auth/signin", { replace: true });
	};

	return (
		<Button variant="contained" color="primary" onClick={signOut} {...props}>
			Logout
		</Button>
	);
}
