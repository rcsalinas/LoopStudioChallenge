import * as React from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../components/AppBar'
import VoteForm from '../../components/VoteForm'
import MessageBanner from '../../components/MessageBanner'
import { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import constants from '../../../config/constants'
import SearchInputComponent from '../../components/SearchInput'
import CountriesTable from '../../components/CountriesTable'
import TableSkeletonLoader from '../../components/LoadingTable'

export default function HomePageUI() {
  const { message } = useSelector((state: RootState) => state.banner)
  const tableLoading = useSelector((state: RootState) => state.countriesLoading.isLoading)

  return (
    <>
      <AppBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '0 10rem 5rem 10rem'
        }}
      >
        {message && <MessageBanner />}
        <VoteForm />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '100%',
            gap: '1.5rem'
          }}
        >
          <Typography
            variant='h4'
            sx={{
              fontWeight: 'bold'
            }}
          >
            {constants.TABLE_TITLE}
          </Typography>

          <SearchInputComponent name='search' placeholder={constants.SEARC_INPUT_PLACEHOLDER} label='Search' />

          {tableLoading ? <TableSkeletonLoader /> : <CountriesTable />}
        </Box>
      </Box>
    </>
  )
}
