import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'styled-components'
import { StoreContextProvider } from 'stores'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { StoreType } from 'stores/reducer'

function App({ Component, pageProps }: AppProps<{ initialStore?: StoreType }>) {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <StoreContextProvider initialStore={pageProps?.initialStore}>
          <Component {...pageProps} />
        </StoreContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
