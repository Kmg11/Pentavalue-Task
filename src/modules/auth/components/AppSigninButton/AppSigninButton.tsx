/**
 * A button component for simulating a sign-in action as an admin.
 * @module components
 * @component
 * @example
 * import { AppSigninButton } from "@/components";
 *
 * const MyComponent = () => {
 *   return (
 *     <AppSigninButton />
 *   );
 * }
 */
import { Button, ButtonProps } from "@mui/material";
import { authActions, useAppDispatch } from "@/core/store";
import { useNavigate } from "react-router-dom";
import { IUser } from "../..";

interface AppSigninButtonProps extends ButtonProps {}

/**
 * Component for simulating a sign-in action as an admin.
 * @returns {JSX.Element} A React component representing the sign-in button.
 */
export function AppSigninButton(props: AppSigninButtonProps): JSX.Element {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const signIn = () => {
		const fakeUser: IUser = {
			id: "1",
			name: "Admin",
			role: "admin",
		};

		dispatch(authActions.login(fakeUser));
		navigate("/", { replace: true });
	};

	return (
		<Button variant="contained" color="primary" onClick={signIn} {...props}>
			Sign in as admin
		</Button>
	);
}
