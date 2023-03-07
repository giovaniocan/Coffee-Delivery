import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  width: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0rem 1.5rem 1rem 1.5rem;
  padding-bottom: 1rem;

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
  h2 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Tags = styled.div`
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  padding: 0.25rem 0.5rem;
  border-radius: 8px;

  margin: 0.75rem;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 2rem;
  gap: 0.5rem;

  span {
    font-family: 'Baloo 2';
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
    font-size: 1.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['base-button']};
  padding: 1rem 0.5rem;

  gap: 0.25rem;

  border-radius: 8px;

  font-size: 1rem;
  color: ${(props) => props.theme['base-title']};
`

export const IconCarSupermarkt = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  justify-content: center;
  margin: 0.5rem;
  width: 2.5rem;
  height: 3rem;
  border-radius: 4px;
  padding-left: 0.2rem;
  padding-top: 0.5rem;
`
