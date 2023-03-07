import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8rem;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;

    font-family: 'Baloo 2';
    font-weight: 800;
  }

  h3 {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IntemsIcon = styled.div`
  display: grid;
  grid-template-columns: 18rem 19rem;
  margin-top: 3rem;
  gap: 1rem;
`

export const Icon = styled.div`
  display: flex;
  gap: 0.75rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  p {
    margin-top: 0.4rem;
  }
`
export const BaseIcon = styled.div`
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  padding-left: 0.36rem;
  padding-top: 0.35rem;
`
export const Shopping = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const TimerIcon = styled(BaseIcon)`
  background: ${(props) => props.theme.yellow};
`

export const PackageICon = styled(BaseIcon)`
  background: ${(props) => props.theme['base-text']};
`
export const CoffeIcon = styled(BaseIcon)`
  background: ${(props) => props.theme.purple};
`
