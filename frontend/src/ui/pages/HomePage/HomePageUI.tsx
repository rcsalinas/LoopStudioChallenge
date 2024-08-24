import * as React from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../components/AppBar'
import VoteForm from '../../components/VoteForm'
import MessageBanner from '../../components/MessageBanner'
import { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'

export default function HomePageUI() {
  const { message } = useSelector((state: RootState) => state.banner)
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
          padding: '0 10rem'
        }}
      >
        {message && <MessageBanner />}
        <VoteForm />
      </Box>
    </>
  )
}
