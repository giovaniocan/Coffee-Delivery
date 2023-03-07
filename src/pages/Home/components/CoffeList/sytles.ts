import styled from 'styled-components'

export const CoffeListContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ListOfProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;
`
