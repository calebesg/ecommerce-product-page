import { createContext, useState } from 'react'
import { CartContextType, Product } from './types'

const CartContext = createContext<CartContextType>({
  items: [],
  addItemToCart: () => {},
  removeItemCart: () => {},
})

interface CartProviderProps {
  children: any
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<Product[]>([])

  const addItemToCart = (product: Product) => {
    const index = items.findIndex(item => item.id === product.id)

    if (index === -1) {
      return setItems([...items, product])
    }

    const updatedItems = [...items]
    updatedItems[index] = product

    setItems(updatedItems)
  }

  const removeItemCart = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  return (
    <CartContext.Provider value={{ items, addItemToCart, removeItemCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
