export type Theme = 'dark' | ''

export interface ThemeContextType {
  theme: Theme
  changeTheme: () => void
}

// Types from cart context
export type Product = {
  id: number
  quantity: number
  price: number
  discount: number
  title: string
  thumb: string
}

export interface CartContextType {
  items: Product[] | []
  addItemToCart: (item: Product) => void
  removeItemCart: (id: number) => void
}
