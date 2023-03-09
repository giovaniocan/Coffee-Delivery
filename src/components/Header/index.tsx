import { HeaderContainer, IconCar, IconMap } from './styles'
import LogoCoffe from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffe} alt="" />
      </NavLink>
      <nav>
        <IconMap>
          <MapPin size={22} weight="fill" />
          Sua cidade
        </IconMap>

        <IconCar>
          <NavLink to="/success" title="checkout">
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </NavLink>
          <p>5</p>
        </IconCar>
      </nav>
    </HeaderContainer>
  )
}
