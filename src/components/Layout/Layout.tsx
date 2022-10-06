import Head from 'components/Head'
import * as S from './Layout.styles'

type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <S.Wrapper>
    <Head />
    {children}
  </S.Wrapper>
)

export default Layout
