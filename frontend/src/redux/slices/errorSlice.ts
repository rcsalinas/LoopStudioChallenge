import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
	submitVoteError: string | null;
}

const initialState: ErrorState = {
	submitVoteError: null,
};

const errorSlice = createSlice({
	name: "error",
	initialState,
	reducers: {
		setSubmitVoteError: (state, action: PayloadAction<string | null>) => {
			state.submitVoteError = action.payload;
		},
		clearSubmitVoteError: (state) => {
			state.submitVoteError = null;
		},
	},
});

export const { setSubmitVoteError, clearSubmitVoteError } = errorSlice.actions;
export default errorSlice.reducer;
