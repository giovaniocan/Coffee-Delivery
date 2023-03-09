import { CardCoffee } from './cardCoffee'
import {
  CartCoffeeContainer,
  CardContainer,
  SubTotal,
  Total,
  FinishedButton,
} from './styles'

export function CartCoffee() {
  return (
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
        <FinishedButton>confirmar pedido</FinishedButton>
      </CardContainer>
    </CartCoffeeContainer>
  )
}
