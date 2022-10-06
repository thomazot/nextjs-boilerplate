import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'
import { StoreContextProvider } from '../src/stores'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

import 'tailwindcss/tailwind.css'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
        <StoreContextProvider>
          <GlobalStyles />
          <Story />
        </StoreContextProvider>
    </ThemeProvider>
  )
]
