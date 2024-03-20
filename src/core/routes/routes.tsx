import { createBrowserRouter } from "react-router-dom";
import { DashboardHomePage, SigninPage } from "../../pages";
import { AppProtectedRoutes } from "@/modules/auth";

export const appRoutes = createBrowserRouter([
	{
		path: "/",
		Component: AppProtectedRoutes,
		children: [
			{
				index: true,
				Component: DashboardHomePage,
			},
		],
	},
	{
		path: "/auth/signin",
		element: <SigninPage />,
	},
]);
