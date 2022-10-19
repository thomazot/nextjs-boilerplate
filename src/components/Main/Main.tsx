import * as S from './Main.styles'

export type MainProps = {
  children?: React.ReactNode | React.ReactNode[]
}

const Main: React.FC<MainProps> = ({ children }) => (
  <S.Container>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  </S.Container>
)

export default Main
