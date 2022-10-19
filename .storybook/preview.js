import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'
import * as nextImage from 'next/image';
import { StoreContextProvider } from '../src/stores'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

import 'tailwindcss/tailwind.css'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

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
