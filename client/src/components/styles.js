import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const LoginContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '1px solid black',
}))
