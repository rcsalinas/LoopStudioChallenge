import { configureStore } from "@reduxjs/toolkit";
import countriesDataReducer from "./slices/countriesSlice";
import submitVoteLoadingReducer from "./slices/submitLoadingSlice";
import setSubmitVoteError from "./slices/errorSlice";

const store = configureStore({
	reducer: {
		countriesDataReducer: countriesDataReducer,
		submitVoteLoading: submitVoteLoadingReducer,
		setSubmitVoteError: setSubmitVoteError,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
