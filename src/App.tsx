import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './themes/default'
import { GlobalStyle } from './themes/global'
import { Router } from './routes'
import { QuestionContextProvider } from './contexts/questionContext'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <QuestionContextProvider>
        <Router />
      </QuestionContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
