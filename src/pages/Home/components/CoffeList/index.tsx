import { ProductCard } from './ProductCard'
import { CoffeListContainer, ListOfProducts } from './sytles'

export function CoffeList() {
  return (
    <CoffeListContainer>
      <h1>Nossos cafés</h1>
      <ListOfProducts>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ListOfProducts>
    </CoffeListContainer>
  )
}
