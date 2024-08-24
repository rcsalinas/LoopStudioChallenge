import { configureStore } from '@reduxjs/toolkit'
import countriesDataReducer from './slices/countriesSlice'
import submitVoteLoadingReducer from './slices/submitLoadingSlice'
import bannerReducer from './slices/bannerSlice'
import topCountriesReducer from './slices/topCountriesSlice'
import countriesLoadingReducer from './slices/countriesLoadingSlice'

const store = configureStore({
  reducer: {
    countriesDataReducer: countriesDataReducer,
    submitVoteLoading: submitVoteLoadingReducer,
    banner: bannerReducer,
    topCountries: topCountriesReducer,
    countriesLoading: countriesLoadingReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
