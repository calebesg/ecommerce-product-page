import { createContext, useState } from 'react'
import ProductCore from '../../core/ProductCore'

interface CartContextType {
  items?: ProductCore[]
  totalItems: number
  addItemToCart?: (item: ProductCore) => void
  removeItemCart?: (id: number) => void
}

const CartContext = createContext<CartContextType>({
  totalItems: 0,
})

interface CartProviderProps {
  children: any
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<ProductCore[]>([])
  const [totalItems, setTotalItems] = useState(0)

  const countItems = (arrItems: ProductCore[]) => {
    const total = arrItems.reduce((acc, curr) => acc + curr.quantity, 0)
    setTotalItems(total)
  }

  const addItemToCart = (product: ProductCore) => {
    const index = items.findIndex(item => item.id === product.id)

    let list
    if (index === -1) list = addNewItem(product)
    else list = updateItem(product, index)

    setItems(list)
    countItems(list)
  }

  const addNewItem = (product: ProductCore) => {
    return [...items, product]
  }

  const updateItem = (product: ProductCore, index: number) => {
    const updatedItems = [...items]
    updatedItems[index] = product
    return updatedItems
  }

  const removeItemCart = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
    // countItems(updatedItems)
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
