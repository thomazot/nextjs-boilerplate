import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { StoreContextProvider } from 'stores'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { StoreType } from 'stores/reducer'

import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }: AppProps<{ initialStore?: StoreType }>) {
  return (
    <ThemeProvider theme={theme}>
      <StoreContextProvider initialStore={pageProps?.initialStore}>
        <GlobalStyles />
        <Component {...pageProps} />
      </StoreContextProvider>
    </ThemeProvider>
  )
}

export default App
