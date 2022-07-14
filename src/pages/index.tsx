import { ShoppingCart as ShoppingIcon } from 'phosphor-react'
import { useState } from 'react'

import { Modal } from '../components/modal/Modal'
import Product, { Price, QuantitySelector } from '../components/product'
import Slider from '../components/slider/Slider'
import { Button, Layout } from '../components/template'
import { useCartData } from '../data/hooks'

export function getStaticProps() {
  const product = {
    id: 1,
    price: 250,
    discount: 50,
    thumb: '/images/thumb-1.jpg',
    title: 'Fall Limited Edition Sneakers',
    description: `These low-profile sneakers are you perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand
    everything the weather can offer.`,
    images: [
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
    ],
  }

  return {
    props: {
      product: product,
    },
  }
}

export default function Home(props: any) {
  const [quantity, setQuantity] = useState(0)
  const [modal, setModal] = useState(false)
  const { addItemToCart } = useCartData()

  const addToCart = () => {
    if (quantity === 0) return
    addItemToCart({ ...props.product, quantity })
  }

  const showModal = () => {
    setModal(true)
  }

  return (
    <Layout>
      <div className="flex-1 flex justify-center">
        <Slider onClickImage={showModal} images={props.product.images} />
      </div>

      <div className="flex-1 flex justify-center">
        <Product
          company="sneaker company"
          title="Fall Limited Edition Sneakers"
        >
          <p className="text-grayish_blue-500 dark:text-grayish_blue-400 transition-colors mt-5 lg:mt-11">
            {props.product.description}
          </p>

          <Price
            price={props.product.price}
            discount={props.product.discount}
          />

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
        <Slider onClickImage={() => {}} images={props.product.images} />
      </Modal>
    </Layout>
  )
}
