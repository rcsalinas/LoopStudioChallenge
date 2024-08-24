import { configureStore } from "@reduxjs/toolkit";
import countriesDataReducer from "./slices/countriesSlice";
import submitVoteLoadingReducer from "./slices/submitLoadingSlice";
import bannerReducer from "./slices/bannerSlice";

const store = configureStore({
  reducer: {
    countriesDataReducer: countriesDataReducer,
    submitVoteLoading: submitVoteLoadingReducer,
    banner: bannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
