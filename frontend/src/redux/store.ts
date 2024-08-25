import { configureStore, combineReducers } from '@reduxjs/toolkit'
import countriesDataReducer from './slices/countriesSlice'
import submitVoteLoadingReducer from './slices/submitLoadingSlice'
import bannerReducer from './slices/bannerSlice'
import topCountriesReducer from './slices/topCountriesSlice'
import countriesLoadingReducer from './slices/countriesLoadingSlice'

const rootReducer = combineReducers({
  countriesDataReducer: countriesDataReducer,
  submitVoteLoading: submitVoteLoadingReducer,
  banner: bannerReducer,
  topCountries: topCountriesReducer,
  countriesLoading: countriesLoadingReducer
})

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
