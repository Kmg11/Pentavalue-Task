import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppAuthService, IAuth, IUser } from "@/modules/auth";

const savedAuth = AppAuthService.getAuth();

interface AuthState extends IAuth {}

const initialState: AuthState = savedAuth || {
	isAuthenticated: false,
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<IUser>) => {
			state.isAuthenticated = true;
			state.user = action.payload;
			AppAuthService.saveAuth(action.payload);
		},

		logout: (state) => {
			state.isAuthenticated = false;
			state.user = null;
			AppAuthService.removeAuth();
		},
	},
	selectors: {
		selectIsAuthenticated: (state) => state.isAuthenticated,
		selectUser: (state) => state.user,
	},
});

export const authActions = authSlice.actions;
export const authSelectors = authSlice.selectors;
export const authReducer = authSlice.reducer;
