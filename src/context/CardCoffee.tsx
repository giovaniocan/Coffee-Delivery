import { createContext, ReactNode, useState } from 'react'
import { produce } from 'immer'
export interface CardCoffee {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
  quantSelected: number
}

interface CardCoffeeContextType {
  cartItems: CardCoffee[]
  AddCoffeToCart: (data: CardCoffee, quant: number) => void
}
interface CardCoffeeProviderProps {
  children: ReactNode
}

export const CardCoffeeContext = createContext({} as CardCoffeeContextType)

export function CardCoffeeContextProvider({
  children,
}: CardCoffeeProviderProps) {
  const [cartItems, serCartItems] = useState<CardCoffee[]>([])

  function AddCoffeToCart(data: CardCoffee, quant: number) {
    serCartItems(
      produce(cartItems, (draft) => {
        draft.push({
          description: data.description,
          id: data.id,
          image: data.image,
          price: data.price,
          quantSelected: quant,
          tags: data.tags,
          title: data.title,
        })
      }),
    )
  }

  return (
    <CardCoffeeContext.Provider value={{ AddCoffeToCart, cartItems }}>
      {children}
    </CardCoffeeContext.Provider>
  )
}
