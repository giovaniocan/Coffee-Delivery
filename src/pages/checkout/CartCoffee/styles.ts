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

  img {
    width: 4rem;
    height: 4rem;
  }

  div {
    display: flex;
    align-items: center;
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
  gap: 0.5rem;
  padding-left: 2rem;
  background: ${(props) => props.theme['base-button']};
`

export const PlusAndMinus = styled.div``

export const RemoveButton = styled.button``

export const SubTotal = styled.div``

export const Total = styled.div``

export const FinishedButton = styled.button``
