import { configureStore } from "@reduxjs/toolkit";
import countriesDataReducer from "./slices/countriesSlice";

const store = configureStore({
	reducer: {
		countriesDataReducer: countriesDataReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
