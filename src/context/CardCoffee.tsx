import { createContext, ReactNode, useState } from 'react'
import { produce } from 'immer'
interface CardCoffee {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
  quantSelected: number
}

interface CardCoffeeContextType {
  cards: CardCoffee[]
  AddCoffeToCart: (data: CardCoffee) => void
}
interface CardCoffeeProviderProps {
  children: ReactNode
}

export const CardCoffeeContext = createContext({} as CardCoffeeContextType)

export function CardCoffeeContextProvider({
  children,
}: CardCoffeeProviderProps) {
  const [cartItems, serCartItems] = useState<CardCoffee[]>([])

  function AddCoffeToCart(data: CardCoffee) {
    serCartItems(
      produce(cartItems, (draft) => {
        draft.push(data)
      }),
    )
  }

  return (
    <CardCoffeeContext.Provider value={AddCoffeToCart}>
      {children}
    </CardCoffeeContext.Provider>
  )
}
