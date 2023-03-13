import { createContext, ReactNode } from 'react'

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
}
interface CardCoffeeProviderProps {
  children: ReactNode
}

export const CardCoffeeContext = createContext({} as CardCoffeeContextType)

export function CardCoffeeContextProvider({
  children,
}: CardCoffeeProviderProps) {
  return (
    <CardCoffeeContext.Provider value={cards}>
      {children}
    </CardCoffeeContext.Provider>
  )
}
