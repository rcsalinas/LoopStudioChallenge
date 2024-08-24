import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Country {
  label: string;
  id: string;
}

interface CountriesState {
  countriesData: Country[];
}

const initialState: CountriesState = {
  countriesData: [],
};

const countriesSlice = createSlice({
  name: "countriesData",
  initialState,
  reducers: {
    setCountriesData: (state, action: PayloadAction<Country[]>) => {
      state.countriesData = action.payload;
    },
  },
});

export const { setCountriesData } = countriesSlice.actions;

export default countriesSlice.reducer;
