import { ReactElement } from 'react'
import { render, renderHook, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { StoreContextProvider } from 'stores'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const WrapperProvider: React.FC<{
  children?: React.ReactNode | React.ReactNode[]
}> = ({ children }) => (
  <StoreContextProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StoreContextProvider>
)

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => render(<WrapperProvider>ui</WrapperProvider>, renderOptions)

function customRenderHook<T>(useCustom: () => T) {
  return renderHook(() => useCustom(), { wrapper: WrapperProvider })
}

export * from '@testing-library/react'
export { customRender as render }
export { customRenderHook as renderHook }
