import React, { useCallback } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Formik, Field, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredCountries } from '../../redux/slices/topCountriesSlice'
import * as Yup from 'yup'
import { Country } from '../../interfaces/apiInterfaces'
import { RootState } from '../../redux/store'

interface SearchInputProps {
  name: string
  label?: string
  placeholder?: string
}

const validationSchema = Yup.object({
  search: Yup.string()
})

export const searchInTopCountries = (countries: Country[], query: string): Country[] => {
  const regex = new RegExp(query, 'i')
  return countries.filter(
    (country) =>
      regex.test(country.name) ||
      regex.test(country.capital) ||
      regex.test(country.region) ||
      regex.test(country.subregion)
  )
}

const SearchInputComponent: React.FC<SearchInputProps> = ({ name, label, placeholder }) => {
  const dispatch = useDispatch()
  const topCountries = useSelector((state: RootState) => state.topCountries.countries)

  const handleSearch = useCallback(
    (query: string) => {
      const filteredCountries = searchInTopCountries(topCountries, query)
      dispatch(setFilteredCountries(filteredCountries))
    },
    [dispatch, topCountries]
  )

  return (
    <Formik
      initialValues={{ [name]: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Field name={name}>
            {({ field, meta }: any) => (
              <TextField
                {...field}
                placeholder={placeholder}
                variant='outlined'
                size='small'
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '2px'
                    },
                    width: '35%',
                    backgroundColor: '#FDFDFD',
                    minWidth: '420px'
                  }
                }}
                error={!!meta.error && meta.touched}
                helperText={meta.touched && meta.error ? meta.error : ''}
                onChange={(e) => {
                  setFieldValue(name, e.target.value)
                  handleSearch(e.target.value)
                }}
              />
            )}
          </Field>
        </Form>
      )}
    </Formik>
  )
}

export default SearchInputComponent
