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
  ChargeAmountCoffee: (id: number, type: 'increase' | 'decrease') => void
  removeCoffeFromList: (id: number) => void
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
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (item) => item.id === data.id,
    )

    serCartItems(
      produce(cartItems, (draft) => {
        if (coffeeAlreadyExistsInCart === -1) {
          draft.push({
            description: data.description,
            id: data.id,
            image: data.image,
            price: data.price,
            quantSelected: quant,
            tags: data.tags,
            title: data.title,
          })
        } else {
          draft[coffeeAlreadyExistsInCart].quantSelected += quant
        }
      }),
    )
  }

  function ChargeAmountCoffee(id: number, type: 'increase' | 'decrease') {
    const coffeEExistsInCart = cartItems.findIndex((item) => item.id === id)

    serCartItems(
      produce(cartItems, (draft) => {
        draft[coffeEExistsInCart].quantSelected =
          type === 'increase'
            ? cartItems[coffeEExistsInCart].quantSelected + 1
            : cartItems[coffeEExistsInCart].quantSelected - 1
      }),
    )
  }

  function removeCoffeFromList(id: number) {
    const coffeEExistsInCart = cartItems.findIndex((item) => item.id === id)
    if (coffeEExistsInCart !== -1) {
      serCartItems(
        produce(cartItems, (draft) => {
          draft.splice(coffeEExistsInCart, 1)
        }),
      )
    }
  }

  return (
    <CardCoffeeContext.Provider
      value={{
        AddCoffeToCart,
        cartItems,
        ChargeAmountCoffee,
        removeCoffeFromList,
      }}
    >
      {children}
    </CardCoffeeContext.Provider>
  )
}
