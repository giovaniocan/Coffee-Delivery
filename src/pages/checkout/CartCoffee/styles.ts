import styled from 'styled-components'

export const CartCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;
    margin-bottom: 1.5rem;
  }
`

export const CardContainer = styled.div`
  width: 40rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  flex-direction: column;
  padding: 2.5rem;
`
export const CoffeeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e6e5e5;
  img {
    width: 4rem;
    height: 4rem;
  }

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto';
    line-height: 130%;
    font-weight: 700;
  }
`
export const InfoCard = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 130%;
  }
`

export const ButtonOfCard = styled.div`
  margin-left: 2rem;
  gap: 1rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PlusAndMinus = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  h4 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
    font-family: 'Robot';
    font-weight: 400;
    line-height: 130%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  border: none;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  h3 {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 160%;
    font-weight: 400;
  }
`

export const SubTotal = styled.div`
  padding-top: 2rem;

  div {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
    }

    h4 {
      line-height: 130%;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const FinishedButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  height: 3rem;
  background: ${(props) => props.theme.yellow};
  border: none;
  padding: 0.75rem;

  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-weight: 700;
  line-height: 160%;
  font-size: 0.875ren;

  border-radius: 4px;
`
