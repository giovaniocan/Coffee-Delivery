import { CartCoffee } from './CartCoffee'
import { FormAddress } from './FormAddress'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormAddress />
      <CartCoffee />
    </CheckoutContainer>
  )
}
