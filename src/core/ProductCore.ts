import ProductImage from './ProductImage'

export default interface ProductCore {
  id: number
  title: string
  description: string
  quantity: number
  price: number
  discount: number
  images: ProductImage[]
}
