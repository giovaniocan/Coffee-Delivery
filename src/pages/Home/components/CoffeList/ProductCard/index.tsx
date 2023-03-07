import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Footer,
  ProductCardContainer,
  Tags,
  Actions,
  IconCarSupermarkt,
} from './sytles'

export function ProductCard() {
  return (
    <ProductCardContainer>
      <img src="https://static.wixstatic.com/media/13a672_3e7ab53c2de84368b95205ff4d36f273~mv2.png/v1/fill/w_196,h_194,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caf%C3%A9.png" />

      <Tags>tags</Tags>

      <h2>Name</h2>

      <p>description</p>
      <Footer>
        <span>R$ 9,90</span>
        <Actions>
          <Minus color="#8047F8" size={20} />
          <section>1</section>
          <Plus color="#8047F8" size={20} />
        </Actions>
        <IconCarSupermarkt>
          <ShoppingCart size={35} weight="fill" color="#fff" />
        </IconCarSupermarkt>
      </Footer>
    </ProductCardContainer>
  )
}
