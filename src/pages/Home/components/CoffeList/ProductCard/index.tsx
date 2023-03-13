import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import {
  Footer,
  ProductCardContainer,
  Tags,
  Actions,
  IconCarSupermarkt,
} from './sytles'

interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
  quantSelected: number
}

interface ProductCardProps {
  coffee: Coffee
}

export function ProductCard({ coffee }: ProductCardProps) {
  const [quantity, setQuantity] = useState(coffee.quantSelected)

  const {} = useContext(CartContext)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => state - 1)
    } else {
      alert('A quantidade não pode ser negativa')
    }
  }

  function handleAddToCart() {}

  return (
    <ProductCardContainer>
      <img src={`/src/assets/${coffee.image}`} />

      <Tags>
        {coffee.tags.map((tag: string) => {
          return <span key={tag}>{tag}</span>
        })}
      </Tags>

      <h2>{coffee.title}</h2>

      <p>{coffee.description}</p>
      <Footer>
        <span>R$ {coffee.price}0</span>
        <Actions>
          <Minus color="#8047F8" size={20} onClick={handleDecrease} />
          <section>{quantity}</section>
          <Plus color="#8047F8" size={20} onClick={handleIncrease} />
        </Actions>
        <IconCarSupermarkt onClick={handleAddToCart}>
          <ShoppingCart size={35} weight="fill" color="#fff" />
        </IconCarSupermarkt>
      </Footer>
    </ProductCardContainer>
  )
}
