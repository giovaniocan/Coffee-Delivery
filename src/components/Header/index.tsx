import { HeaderContainer, IconCar, IconMap } from './styles'
import LogoCoffe from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CardCoffeeContext } from '../../context/CardCoffee'

export function Header() {
  const { cartItems } = useContext(CardCoffeeContext)

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
          <NavLink to="/checkout" title="checkout">
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </NavLink>
          <p>{cartItems.length}</p>
        </IconCar>
      </nav>
    </HeaderContainer>
  )
}
