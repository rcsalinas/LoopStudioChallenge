import React from 'react'
import HomePageUI from './HomePageUI'
import { getCountries } from '../../../networking/services/getCountries'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { setCountriesData } from '../../../redux/slices/countriesSlice'
import { setTopCountries } from '../../../redux/slices/topCountriesSlice'
import { showError } from '../../../redux/slices/bannerSlice'
import getTopCountries from '../../../networking/endpoints/countries/getTopCountries'
import { setLoading } from '../../../redux/slices/countriesLoadingSlice'

function HomePage() {
  const dispatch = useDispatch<AppDispatch>()

  React.useEffect(() => {
    async function fetchCountriesData() {
      const data = await getCountries()
      dispatch(setCountriesData(data))
    }
    fetchCountriesData()
  }, [dispatch])

  React.useEffect(() => {
    let mounted = true
    async function fetchCountries() {
      dispatch(setLoading(true))
      try {
        const response = await getTopCountries()
        if (mounted) {
          dispatch(setTopCountries(response.data))
        }
      } catch (error: any) {
        if (mounted) {
          dispatch(showError(error.errorMessage))
        }
      } finally {
        if (mounted) {
          dispatch(setLoading(false))
        }
      }
    }

    fetchCountries()

    return () => {
      mounted = false
    }
  }, [dispatch])

  return <HomePageUI />
}

export default HomePage
