import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CountriesLoadingState {
  isLoading: boolean
}

const initialState: CountriesLoadingState = {
  isLoading: false
}

const countriesLoadingSlice = createSlice({
  name: 'countriesLoading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { setLoading } = countriesLoadingSlice.actions
export default countriesLoadingSlice.reducer
