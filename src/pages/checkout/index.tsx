import { NavLink } from 'react-router-dom'
import { CardCoffee } from './cardCoffee'

import { FormAddress } from './FormAddress'
import {
  CardContainer,
  CartCoffeeContainer,
  CheckoutContainer,
  FinishedButton,
  SubTotal,
  Total,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormAddress />

      <CartCoffeeContainer>
        <h2>Faça o seu pedido</h2>
        <CardContainer>
          <CardCoffee />

          <SubTotal>
            <div>
              <p>Total de itens</p>
              <h4>R$ 29,70</h4>
            </div>
            <div>
              <p>Entrega</p>
              <h4>R$ 3,50</h4>
            </div>
          </SubTotal>
          <Total>
            <p>Total</p>
            <p>R$ 33,20</p>
          </Total>
          <NavLink to="/success" title="checkout">
            <FinishedButton>confirmar pedido</FinishedButton>
          </NavLink>
        </CardContainer>
      </CartCoffeeContainer>
    </CheckoutContainer>
  )
}
