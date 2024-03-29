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
  const { ChargeAmountCoffee, removeCoffeFromList } =
    useContext(CardCoffeeContext)
  const [quantity, setQuantity] = useState(coffee.quantSelected)

  function handleIncreaseAmount() {
    ChargeAmountCoffee(coffee.id, 'increase')

    setQuantity((state) => state + 1)
  }

  function DecreaseIncreaseAmount() {
    if (quantity === 1) {
      // se for igual a 1, quando diminuir vai passar a ser 0, ou seja, ele sera tirado do carrinho
      removeCoffeFromList(coffee.id)
    } else {
      ChargeAmountCoffee(coffee.id, 'decrease')

      setQuantity((state) => state - 1)
    }
  }

  function handleRemoveCoffee() {
    removeCoffeFromList(coffee.id)
  }

  return (
    <CoffeeCard>
      <div>
        <img src={`/src/assets/${coffee.image}`} />{' '}
        <InfoCard>
          <p>{coffee.title}</p>
          <ButtonOfCard>
            <PlusAndMinus>
              <Minus onClick={DecreaseIncreaseAmount} />
              <h4>{quantity}</h4>
              <Plus onClick={handleIncreaseAmount} />
            </PlusAndMinus>
            <RemoveButton onClick={handleRemoveCoffee}>
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
