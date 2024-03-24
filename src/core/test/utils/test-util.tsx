import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";

import type { AppStore, RootState } from "@/core/store";
import { setupStore } from "@/core/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/core/styles";
import { BrowserRouter } from "react-router-dom";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: Partial<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: React.ReactElement,
	extendedRenderOptions: ExtendedRenderOptions = {}
) {
	const {
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		...renderOptions
	} = extendedRenderOptions;

	const Wrapper = ({ children }: PropsWithChildren) => (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<BrowserRouter>{children}</BrowserRouter>
			</Provider>
		</ThemeProvider>
	);

	return {
		store,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
}
