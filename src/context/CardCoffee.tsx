import { createContext, ReactNode, useEffect, useState } from 'react'
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
  cleanCart: () => void
}
interface CardCoffeeProviderProps {
  children: ReactNode
}

export const CardCoffeeContext = createContext({} as CardCoffeeContextType)

export function CardCoffeeContextProvider({
  children,
}: CardCoffeeProviderProps) {
  const [cartItems, setCartItems] = useState<CardCoffee[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:items-in-cart-1.0',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return []
  })
  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffee-delivery:items-in-cart-1.0', stateJSON)
  }, [cartItems])

  function AddCoffeToCart(data: CardCoffee, quant: number) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (item) => item.id === data.id,
    )

    setCartItems(
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

    setCartItems(
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
      setCartItems(
        produce(cartItems, (draft) => {
          draft.splice(coffeEExistsInCart, 1)
        }),
      )
    }
  }
  function cleanCart() {
    setCartItems(
      produce(cartItems, (draft) => {
        draft.splice(0, draft.length)
      }),
    )
  }

  return (
    <CardCoffeeContext.Provider
      value={{
        AddCoffeToCart,
        cartItems,
        ChargeAmountCoffee,
        removeCoffeFromList,
        cleanCart,
      }}
    >
      {children}
    </CardCoffeeContext.Provider>
  )
}
