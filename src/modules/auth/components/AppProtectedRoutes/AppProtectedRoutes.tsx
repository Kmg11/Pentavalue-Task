/**
 * Component for managing protected routes based on user authentication status.
 * @module components
 * @component
 */
import { Navigate, Outlet } from "react-router-dom";
import { authSelectors, useAppSelector } from "@/core/store";

/**
 * Component for managing protected routes based on user authentication status.
 * @returns {JSX.Element} A React component representing the protected routes.
 */
export function AppProtectedRoutes(): JSX.Element {
	const isAuthenticated = useAppSelector(authSelectors.selectIsAuthenticated);

	if (!isAuthenticated) {
		return <Navigate to="/auth/signin" replace />;
	}

	return <Outlet />;
}
