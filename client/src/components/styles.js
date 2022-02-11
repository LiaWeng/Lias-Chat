import { styled } from '@mui/material/styles'
import { Box, Tabs, Tab, Button, TextField } from '@mui/material'

export const LoginContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '1px solid black',
}))

export const SidebarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '30vw',
  boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

export const StyledTab = styled(Tab)(({ theme }) => ({
  width: '15vw',
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

export const SidebarButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
}))

export const ModalBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  width: '40%',
  maxWidth: '500px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
}))

export const ModalTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  margin: `${theme.spacing(3)} 0`,
}))

export const PanelContainer = styled(Box)(({ theme }) => ({
  // border: '1px solid black',
  flexGrow: '1',
}))
