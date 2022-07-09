import { createContext, useState } from 'react'
import { CartContextType, Product } from './types'

const CartContext = createContext<CartContextType>({
  items: [],
  totalItems: 0,
  addItemToCart: () => {},
  removeItemCart: () => {},
})

interface CartProviderProps {
  children: any
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<Product[]>([])
  const [totalItems, setTotalItems] = useState(0)

  const countItems = (arrItems: Product[]) => {
    const total = arrItems.reduce((acc, curr) => acc + curr.quantity, 0)
    setTotalItems(total)
  }

  const addItemToCart = (product: Product) => {
    const index = items.findIndex(item => item.id === product.id)

    let list
    if (index === -1) list = addNewItem(product)
    else list = updateItem(product, index)

    setItems(list)
    countItems(list)
  }

  const addNewItem = (product: Product) => {
    return [...items, product]
  }

  const updateItem = (product: Product, index: number) => {
    const updatedItems = [...items]
    updatedItems[index] = product
    return updatedItems
  }

  const removeItemCart = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
    countItems(updatedItems)
  }

  return (
    <CartContext.Provider
      value={{ items, totalItems, addItemToCart, removeItemCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
