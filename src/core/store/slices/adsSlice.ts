import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IAd } from "@/modules/ad";

interface IGetAdsResponse {
	message: "Success";
	data: {
		result: IAd[];
		thisPage: number;
		allPages: number;
		count: number;
	};
}

export const fetchAds = createAsyncThunk(
	"ads/fetchAds",
	async (_, thunkAPI) => {
		const response = await axios.get<IGetAdsResponse>(
			"https://ads-back.shutterstudio.io/ads",
			{ signal: thunkAPI.signal }
		);

		return response.data;
	}
);

interface AdsState {
	ads: IAd[];
	loading: boolean;
	error: string | null;
}

const initialState: AdsState = {
	ads: [],
	loading: false,
	error: null,
};

export const adsSlice = createSlice({
	name: "ads",
	initialState,
	reducers: {
		createAd: (state, action: PayloadAction<IAd>) => {
			state.ads.push(action.payload);
		},
		deleteAd: (state, action: PayloadAction<IAd["id"]>) => {
			state.ads = state.ads.filter((ad) => ad.id !== action.payload);
		},
		updateAd: (state, action: PayloadAction<IAd>) => {
			const index = state.ads.findIndex((ad) => ad.id === action.payload.id);
			state.ads[index] = action.payload;
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
			state.ads = action.payload.data.result;
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
