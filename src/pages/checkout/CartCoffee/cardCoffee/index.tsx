import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonOfCard,
  CoffeeCard,
  InfoCard,
  PlusAndMinus,
  RemoveButton,
} from './styles'

export function CardCoffee() {
  return (
    <CoffeeCard>
      <div>
        <img src="https://static.wixstatic.com/media/13a672_3e7ab53c2de84368b95205ff4d36f273~mv2.png/v1/fill/w_196,h_194,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caf%C3%A9.png" />
        <InfoCard>
          <p>Nome do café</p>
          <ButtonOfCard>
            <PlusAndMinus>
              <Minus />
              <h4>1</h4>
              <Plus />
            </PlusAndMinus>
            <RemoveButton>
              <Trash />
              <h3>REMOVER</h3>
            </RemoveButton>
          </ButtonOfCard>
        </InfoCard>
      </div>
      <h2>R$ 9,90</h2>
    </CoffeeCard>
  )
}
