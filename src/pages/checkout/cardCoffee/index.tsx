import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CardCoffeeContext } from '../../../context/CardCoffee'
import {
  ButtonOfCard,
  CoffeeCard,
  InfoCard,
  PlusAndMinus,
  RemoveButton,
} from './styles'

interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
  quantSelected: number
}

interface CardCoffeeProps {
  coffee: Coffee
}
export function CardCoffee({ coffee }: CardCoffeeProps) {
  const { increseAmountCoffee } = useContext(CardCoffeeContext)
  const [quantity, setQuantity] = useState(coffee.quantSelected)
  function handleIncreaseAmount() {
    increseAmountCoffee(coffee.id)

    setQuantity((state) => state + 1)
  }
  return (
    <CoffeeCard>
      <div>
        <img src={`/src/assets/${coffee.image}`} />{' '}
        <InfoCard>
          <p>{coffee.title}</p>
          <ButtonOfCard>
            <PlusAndMinus>
              <Minus />
              <h4>{quantity}</h4>
              <Plus onClick={handleIncreaseAmount} />
            </PlusAndMinus>
            <RemoveButton>
              <Trash />
              <h3>REMOVER</h3>
            </RemoveButton>
          </ButtonOfCard>
        </InfoCard>
      </div>
      <h2>R$ {coffee.price}0</h2>
    </CoffeeCard>
  )
}
