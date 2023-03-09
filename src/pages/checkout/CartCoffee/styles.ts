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
