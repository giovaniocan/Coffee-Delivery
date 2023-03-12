import { Minus, Plus, ShoppingCart } from 'phosphor-react'
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
          <Minus color="#8047F8" size={20} />
          <section>{coffee.quantSelected}</section>
          <Plus color="#8047F8" size={20} />
        </Actions>
        <IconCarSupermarkt>
          <ShoppingCart size={35} weight="fill" color="#fff" />
        </IconCarSupermarkt>
      </Footer>
    </ProductCardContainer>
  )
}
