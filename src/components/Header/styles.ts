import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`
export const BaseLinkIcon = styled.a`
  width: auto;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['yellow-dark']};
  text-decoration: none;

  border-radius: 6px;
  gap: 0.2rem;
`
export const IconCar = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem 0;

  p {
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    padding-left: 0.4rem;
    padding-top: 0.1rem;
    //vai deixar eles ocuparem o mesmo espaço
    margin-top: -2rem;
    margin-right: -2rem;
    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 100%;

    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1rem;
  }
`

export const IconMap = styled(BaseLinkIcon)`
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
  padding: 0 0.5rem 0;
`

export const ItemsInCart = styled.div``
