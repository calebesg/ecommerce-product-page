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
    const isAdded = items.includes(product)

    if (!isAdded) return setItems([...items, product])

    const updatedItems = items.map(item => {
      if (item.id === product.id) return product
      return item
    })

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
