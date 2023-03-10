import styled from 'styled-components'

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
