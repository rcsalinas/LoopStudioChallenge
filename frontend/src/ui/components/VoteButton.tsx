// components/VoteButton.tsx
import Button from '@mui/material/Button'
import React from 'react'

interface VoteButtonProps {
  disabled: boolean
  children: React.ReactNode
}

const VoteButton: React.FC<VoteButtonProps> = ({ disabled, children }) => (
  <Button
    variant='contained'
    type='submit'
    sx={{
      height: '36px',
      borderRadius: '8px',
      maxWidth: '120px',
      backgroundColor: '#15172A',
      fontSize: '14px',
      fontWeight: 700,
      textTransform: 'none',
      width: '100%'
    }}
    disabled={disabled}
  >
    {children}
  </Button>
)

export default VoteButton
