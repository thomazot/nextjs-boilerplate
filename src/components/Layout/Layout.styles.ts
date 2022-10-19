import styled from 'styled-components'
import tw from 'twin.macro'
import * as Header from 'components/Header/Header.styles'
import * as Main from 'components/Main/Main.styles'
import * as Footer from 'components/Footer/Footer.styles'

export const Wrapper = styled.div`
  ${tw`min-h-full grid grid-rows-[auto 1fr auto]`}

  ${Main.Container}, ${Header.Container}, ${Footer.Container} {
    ${tw`min-h-0`}
  }

  ${Header.Container} {
    ${tw`z-10`}
  }
`
