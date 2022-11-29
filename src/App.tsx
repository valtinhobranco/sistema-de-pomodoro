import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/theme/Default'

// ? styles
import Global from './styles/global'
import { Router } from './Routes'

// ? components

// ? contexts
import { CyclesContextProvider } from './context/CyclesContext'
const GlobalStyles: any = Global

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
