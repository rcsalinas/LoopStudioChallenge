// topCountriesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Country } from '../../interfaces/apiInterfaces'

interface TopCountriesState {
  countries: Country[]
  filteredCountries: Country[]
}

const initialState: TopCountriesState = {
  countries: [],
  filteredCountries: []
}

const topCountriesSlice = createSlice({
  name: 'topCountries',
  initialState,
  reducers: {
    setTopCountries: (state, action: PayloadAction<Country[]>) => {
      state.countries = action.payload
      state.filteredCountries = action.payload
    },
    setFilteredCountries: (state, action: PayloadAction<Country[]>) => {
      state.filteredCountries = action.payload
    }
  }
})

export const { setTopCountries, setFilteredCountries } = topCountriesSlice.actions

export default topCountriesSlice.reducer
