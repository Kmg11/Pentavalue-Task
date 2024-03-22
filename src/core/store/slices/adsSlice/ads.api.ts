import { IAd } from "@/modules/ad-module";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface IGetAdsResponse {
	message: "Success";
	data: {
		result: IAd[];
		thisPage: number;
		allPages: number;
		count: number;
	};
}

interface IGetAdsRequest {
	page: number;
	limit: number;
}

export const fetchAds = createAsyncThunk(
	"ads/fetchAds",
	async ({ page, limit }: IGetAdsRequest, thunkAPI) => {
		const response = await axios.get<IGetAdsResponse>(
			"https://ads-back.shutterstudio.io/ads",
			{ signal: thunkAPI.signal, params: { page, limit } }
		);

		return response.data;
	}
);
