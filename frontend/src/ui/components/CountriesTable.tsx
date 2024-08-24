import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

import cajaVacia from '../../assets/caja-vacia.png'
import { Typography, Box } from '@mui/material'
import constants from '../../config/constants'
import { tableCellClasses } from '@mui/material/TableCell'

export default function CountriesTable() {
  const filteredCountries = useSelector((state: RootState) => state.topCountries.filteredCountries)

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
