import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { IssuesProvider } from './context/Issues'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <IssuesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssuesProvider>
    </ThemeProvider>
  )
}

export default App
