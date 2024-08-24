import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BannerState {
	isError: boolean;
	message: string;
}

const initialState: BannerState = {
	isError: false,
	message: "",
};

const bannerSlice = createSlice({
	name: "banner",
	initialState,
	reducers: {
		showError: (state, action: PayloadAction<string>) => {
			state.isError = true;
			state.message = action.payload;
		},
		showSuccess: (state, action: PayloadAction<string>) => {
			state.isError = false;
			state.message = action.payload;
		},
		clearBanner: (state) => {
			state.isError = false;
			state.message = "";
		},
	},
});

export const { showError, showSuccess, clearBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
