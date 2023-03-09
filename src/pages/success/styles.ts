import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding-right: 10rem;
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;
`
export const Teste = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const HeaderContainerSuccess = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoOrder = styled.div`
  border: 1px solid transparent;
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(to right, #8047f8, #dbac2c) border-box;
  border-radius: 6px 36px;
  padding: 2.5rem;
  gap: 10rem;
`

export const IndividualInfo = styled.div`
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
`
export const TimerIcon = styled(IndividualInfo)`
  background: ${(props) => props.theme.yellow};
`
export const CashIcon = styled(IndividualInfo)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const MapIcon = styled(IndividualInfo)`
  background: ${(props) => props.theme.purple};
`
export const Each = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Content = styled.div`
  color: ${(props) => props.theme['base-text']};
  font-size: 16px;
  line-height: 130%;
  h3 {
    font-weight: 700;
  }
  h4 {
    font-weight: 400;
  }
`
