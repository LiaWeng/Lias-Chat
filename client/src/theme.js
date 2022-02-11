import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#56c8d8',
      main: '#0097a7',
      dark: '#006978',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#a4a4a4',
      main: '#757575',
      dark: '#494949',
      contrastText: '#ffffff',
    },
  },
})

export default theme
