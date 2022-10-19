import Footer from 'components/Footer'
import Head from 'components/Head'
import Header from 'components/Header'
import Main from 'components/Main'

import * as S from './Layout.styles'

type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <S.Wrapper>
    <Head />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </S.Wrapper>
)

export default Layout
