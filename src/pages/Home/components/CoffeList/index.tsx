import { ProductCard } from './ProductCard'
import { CoffeListContainer, ListOfProducts } from './sytles'
import { coffees } from '../../../../Data/Coffees'
export function CoffeList() {
  return (
    <CoffeListContainer>
      <h1>Nossos cafés</h1>
      <ListOfProducts>
        {coffees.map((coffe) => {
          return <ProductCard key={coffe.id} coffee={coffe} />
        })}
      </ListOfProducts>
    </CoffeListContainer>
  )
}
