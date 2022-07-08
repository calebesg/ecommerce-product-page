import { useState } from 'react'
import { ShoppingCart as ShoppingIcon } from 'phosphor-react'

import { Layout, Button } from '../components/template'
import Slider, { SliderImageType } from '../components/slider'
import Product, { Price, QuantitySelector } from '../components/product'
import { useCartData } from '../data/hooks'

import image1 from '../assets/image-product-1.jpg'
import image2 from '../assets/image-product-2.jpg'
import image3 from '../assets/image-product-3.jpg'
import image4 from '../assets/image-product-4.jpg'
import thumb1 from '../assets/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/image-product-4-thumbnail.jpg'

const imagesMock: SliderImageType[] = [
  {
    key: '1',
    src: image1,
    thumb: thumb1,
  },
  {
    key: '2',
    src: image2,
    thumb: thumb2,
  },
  {
    key: '3',
    src: image3,
    thumb: thumb3,
  },
  {
    key: '4',
    src: image4,
    thumb: thumb4,
  },
]

const product = {
  id: 1,
  price: 250,
  discount: 50,
  thumb: 'image-product-1-thumbnail.jpg',
  title: 'Fall Limited Edition Sneakers',
}

export default function Home() {
  const [images, setImages] = useState<SliderImageType[] | null>(imagesMock)
  const [quantity, setQuantity] = useState(0)
  const { addItemToCart } = useCartData()

  const addToCart = () => {
    if (quantity === 0) return
    addItemToCart({ ...product, quantity })
  }

  if (!images) return <div>Loading...</div>

  return (
    <Layout>
      <div className="flex-1 flex justify-center">
        <Slider images={images} />
      </div>

      <div className="flex-1 flex justify-center">
        <Product
          company="sneaker company"
          title="Fall Limited Edition Sneakers"
        >
          <p className="text-grayish_blue-500 dark:text-grayish_blue-400 transition-colors mt-5 lg:mt-11">
            These low-profile sneakers are you perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>

          <Price price={250} discount={50} />

          <div className="flex flex-col lg:flex-row items-center gap-4 mt-9">
            <QuantitySelector quantity={quantity} onChange={setQuantity} />

            <Button
              onClick={addToCart}
              shadow
              text="Add to cart"
              icon={ShoppingIcon}
            />
          </div>
        </Product>
      </div>
    </Layout>
  )
}
