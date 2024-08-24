import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import getTopCountries from '../../networking/endpoints/countries/getTopCountries'
import { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { setTopCountries } from '../../redux/slices/topCountriesSlice'
import { showError } from '../../redux/slices/bannerSlice'
import cajaVacia from '../../assets/caja-vacia.png'
import { Typography, Box } from '@mui/material'
import constants from '../../config/constants'
import { tableCellClasses } from '@mui/material/TableCell'

export default function CountriesTable() {
  const dispatch = useDispatch()
  const filteredCountries = useSelector((state: RootState) => state.topCountries.filteredCountries)

  React.useEffect(() => {
    async function getCountriesInfo() {
      try {
        const response = await getTopCountries()
        dispatch(setTopCountries(response.data))
      } catch (error: any) {
        dispatch(showError(error.errorMessage))
      }
    }
    getCountriesInfo()
  }, [dispatch])

  return (
    <>
      {filteredCountries.length === 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <img src={cajaVacia} alt='caja-vacia' />
          <Typography variant='h6'>{constants.NO_COUNTRIES_FOUND}</Typography>
        </Box>
      )}
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none'
            }
          }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Country</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='center'>
                Capital
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='center'>
                Region
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='center'>
                Subregion
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='center'>
                Votes
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCountries.map((country: any) => (
              <TableRow key={country.name}>
                <TableCell component='th' scope='row'>
                  {country.name}
                </TableCell>
                <TableCell align='center'>{country.capital}</TableCell>
                <TableCell align='center'>{country.region}</TableCell>
                <TableCell align='center'>{country.subregion}</TableCell>
                <TableCell align='center'>{country.votes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
