import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { StoreContextProvider } from 'stores'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <StoreContextProvider>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </StoreContextProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
