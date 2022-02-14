import { styled } from '@mui/material/styles'
import {
  Box,
  Tabs,
  Tab,
  Button,
  TextField,
  Modal,
  FormControl,
} from '@mui/material'

export const LoginContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '1px solid black',
}))

export const LoginForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  marginTop: theme.spacing(3),
  // border: '1px solid black',
}))

export const SidebarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
}))

export const UserInfoContainer = styled(Box)(({ theme }) => ({
  height: '8vh',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  // border: '1px solid black',
}))

export const StyledTab = styled(Tab)(({ theme }) => ({
  width: '50%',
  fontWeight: 600,
}))

export const SidebarButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  marginBottom: theme.spacing(1),
}))

export const ModalContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  maxWidth: '500px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: theme.shape.borderRadius,
  boxSizing: 'border-box',
  padding: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}))

export const ModalTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  margin: `${theme.spacing(3)} 0`,
}))

export const ModalFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  margin: `${theme.spacing(2)} 0`,
  maxHeight: '150px',
  overflowY: 'auto',
}))

export const PanelContainer = styled(Box)(({ theme }) => ({
  flexGrow: '1',
}))

export const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
}))

export const ConversationTab = styled(Tab)(({ theme }) => ({
  display: 'flex',
  alignItems: 'start',
  margin: `${theme.spacing(0.5)} 0`,
}))

export const ConversationContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // border: '1px solid black',
}))
