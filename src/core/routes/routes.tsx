import { createBrowserRouter } from "react-router-dom";
import { SigninPage } from "../../pages";

export const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: "Home Page",
	},
	{
		path: "/auth/signin",
		element: <SigninPage />,
	},
]);
