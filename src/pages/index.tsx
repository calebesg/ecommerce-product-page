import { useState } from 'react'
import { ShoppingCart as ShoppingIcon } from 'phosphor-react'

import { Layout, Button } from '../components/template'
import Slider, { SliderImageType } from '../components/slider'
import Product, { Price, QuantitySelector } from '../components/product'
import { useCartData } from '../data/hooks'
import { Modal } from '../components/modal/Modal'

const images: SliderImageType[] = [
  {
    key: '1',
    src: '/images/image-1.jpg',
    thumb: '/images/thumb-1.jpg',
  },
  {
    key: '2',
    src: '/images/image-2.jpg',
    thumb: '/images/thumb-2.jpg',
  },
  {
    key: '3',
    src: '/images/image-3.jpg',
    thumb: '/images/thumb-3.jpg',
  },
  {
    key: '4',
    src: '/images/image-4.jpg',
    thumb: '/images/thumb-4.jpg',
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
  const [quantity, setQuantity] = useState(0)
  const { addItemToCart } = useCartData()
  const [modal, setModal] = useState(false)

  const addToCart = () => {
    if (quantity === 0) return
    addItemToCart({ ...product, quantity })
  }

  const showModal = () => {
    console.log('click')
    setModal(true)
  }

  if (!images) return <div>Loading...</div>

  return (
    <Layout>
      <div className="flex-1 flex justify-center">
        <Slider onClickImage={showModal} images={images} />
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

      <Modal opened={modal} closeModal={() => setModal(false)}>
        <Slider onClickImage={() => {}} images={images} />
      </Modal>
    </Layout>
  )
}
