import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '../../../src/ui/pages/HomePage/HomePage'
import { renderWithProviders } from '../../../src/utils/test-utils'

jest.mock('../../../src/networking/services/getCountries')
jest.mock('../../../src/networking/endpoints/countries/getTopCountries')

const initialState = {
  countriesDataReducer: {
    countriesData: [
      {
        label: 'Afghanistan',
        id: 'AF'
      },
      {
        label: 'Albania',
        id: 'AL'
      },
      {
        label: 'Algeria',
        id: 'DZ'
      },
      {
        label: 'Andorra',
        id: 'AD'
      },
      {
        label: 'Angola',
        id: 'AO'
      },
      {
        label: 'Antigua and Barbuda',
        id: 'AG'
      },
      {
        label: 'Argentina',
        id: 'AR'
      },
      {
        label: 'Armenia',
        id: 'AM'
      },
      {
        label: 'Australia',
        id: 'AU'
      },
      {
        label: 'Austria',
        id: 'AT'
      },
      {
        label: 'Azerbaijan',
        id: 'AZ'
      },
      {
        label: 'Bahamas',
        id: 'BS'
      },
      {
        label: 'Bahrain',
        id: 'BH'
      },
      {
        label: 'Bangladesh',
        id: 'BD'
      },
      {
        label: 'Barbados',
        id: 'BB'
      },
      {
        label: 'Belarus',
        id: 'BY'
      },
      {
        label: 'Belgium',
        id: 'BE'
      },
      {
        label: 'Belize',
        id: 'BZ'
      },
      {
        label: 'Benin',
        id: 'BJ'
      },
      {
        label: 'Bhutan',
        id: 'BT'
      },
      {
        label: 'Bolivia',
        id: 'BO'
      },
      {
        label: 'Bosnia and Herzegovina',
        id: 'BA'
      },
      {
        label: 'Botswana',
        id: 'BW'
      },
      {
        label: 'Brazil',
        id: 'BR'
      },
      {
        label: 'Brunei',
        id: 'BN'
      },
      {
        label: 'Bulgaria',
        id: 'BG'
      },
      {
        label: 'Burkina Faso',
        id: 'BF'
      },
      {
        label: 'Burundi',
        id: 'BI'
      }
    ]
  },
  topCountries: {
    countries: [],
    filteredCountries: []
  },
  banner: {
    isError: false,
    message: ''
  },
  countriesLoading: {
    isLoading: false
  },
  submitVoteLoading: {
    isLoading: false
  }
}

describe('HomePage', () => {
  test('renders without crashing', () => {
    renderWithProviders(<HomePage />, { preloadedState: initialState })
    expect(screen.getByText('Vote your Favourite Country')).toBeInTheDocument()
  })
})
