import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { setupStore } from "./core/store";
import { theme } from "./core/styles";
import { appRoutes } from "./core/routes";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<RouterProvider router={appRoutes} />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
