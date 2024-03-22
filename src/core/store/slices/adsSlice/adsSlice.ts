import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAd } from "@/modules/ad-module";
import { IGetAdsResponse, fetchAds } from ".";

export type CreateAdPayload = Omit<IAd, "id">;

interface AdsState {
	ads: IGetAdsResponse["data"];
	loading: boolean;
	error: string | null;
}

const initialState: AdsState = {
	ads: { result: [], thisPage: 0, allPages: 0, count: 0 },
	loading: false,
	error: null,
};

export const adsSlice = createSlice({
	name: "ads",
	initialState,
	reducers: {
		createAd: (state, action: PayloadAction<CreateAdPayload>) => {
			const id = Math.random();

			state.ads.result.unshift({ id: id, ...action.payload });
		},

		updateAd: (state, action: PayloadAction<IAd>) => {
			const index = state.ads.result.findIndex(
				(ad) => ad.id === action.payload.id
			);

			state.ads.result[index] = action.payload;
		},

		deleteAd: (state, action: PayloadAction<IAd["id"]>) => {
			state.ads.result = state.ads.result.filter(
				(ad) => ad.id !== action.payload
			);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAds.pending, (state) => {
			state.loading = true;
			state.error = null;
		});

		builder.addCase(fetchAds.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || "An error occurred";
		});

		builder.addCase(fetchAds.fulfilled, (state, action) => {
			state.ads = action.payload.data;
			state.loading = false;
			state.error = null;
		});
	},
	selectors: {
		selectAds: (state) => state.ads,
		selectLoading: (state) => state.loading,
		selectError: (state) => state.error,
	},
});

export const adsActions = adsSlice.actions;
export const adsSelectors = adsSlice.selectors;
export const adsReducer = adsSlice.reducer;
