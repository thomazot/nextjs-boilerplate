import * as S from './Main.styles'

export type MainProps = {
  children?: React.ReactNode | React.ReactNode[]
}

const Main: React.FC<MainProps> = ({ children }) => (
  <S.Main>
    <S.Container>
      <S.InnerContainer>
        <S.RoundedContainer>{children}</S.RoundedContainer>
      </S.InnerContainer>
    </S.Container>
  </S.Main>
)

export default Main
