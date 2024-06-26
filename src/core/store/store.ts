import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adsReducer, authReducer } from "./slices";

const rootReducer = combineReducers({
	auth: authReducer,
	ads: adsReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState,
	});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
