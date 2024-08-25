import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useDispatch } from 'react-redux'
import HomePage from '../../../src/ui/pages/HomePage/HomePage'
import { getCountries } from '../../../src/networking/services/getCountries'
import { setCountriesData } from '../../../src/redux/slices/countriesSlice'
import { setTopCountries } from '../../../src/redux/slices/topCountriesSlice'
import { showError } from '../../../src/redux/slices/bannerSlice'
import getTopCountries from '../../../src/networking/endpoints/countries/getTopCountries'
import { setLoading } from '../../../src/redux/slices/countriesLoadingSlice'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

jest.mock('../../../networking/services/getCountries')
jest.mock('../../../networking/endpoints/countries/getTopCountries')

const mockDispatch = jest.fn()
const mockGetCountries = getCountries as jest.MockedFunction<typeof getCountries>
const mockGetTopCountries = getTopCountries as jest.MockedFunction<typeof getTopCountries>

describe('HomePage', () => {
  beforeEach(() => {
    const mockDispatch = useDispatch as unknown as jest.Mock
    mockDispatch.mockClear()
  })

  test('renders without crashing', () => {
    render(<HomePage />)
    expect(screen.getByText('HomePageUI')).toBeInTheDocument()
  })

  test('fetchCountriesData dispatches setCountriesData with correct data', async () => {
    const mockData = [
      { id: 'US', label: 'USA', name: 'United States' },
      { id: 'CAN', label: 'CAN', name: 'Canada' }
    ]
    mockGetCountries.mockResolvedValueOnce(mockData)

    render(<HomePage />)

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(setCountriesData(mockData))
    })
  })
})
