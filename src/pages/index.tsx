import { ShoppingCart as ShoppingIcon } from 'phosphor-react'
import { useState } from 'react'

import { Modal } from '../components/modal/Modal'
import Product, { Price, QuantitySelector } from '../components/product'
// import Slider from '../components/slider'
import { Button, Layout } from '../components/template'
import ProductCore from '../core/ProductCore'
import { useCartData } from '../data/hooks'

export function getStaticProps() {
  const product: ProductCore = {
    id: 1,
    price: 250,
    discount: 50,
    quantity: 0,
    title: 'Fall Limited Edition Sneakers',
    description: `These low-profile sneakers are you perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand
    everything the weather can offer.`,
    images: [
      {
        src: '/images/image-1.jpg',
        thumb: '/images/thumb-1.jpg',
      },
      {
        src: '/images/image-2.jpg',
        thumb: '/images/thumb-2.jpg',
      },
      {
        src: '/images/image-3.jpg',
        thumb: '/images/thumb-3.jpg',
      },
      {
        src: '/images/image-4.jpg',
        thumb: '/images/thumb-4.jpg',
      },
    ],
  }

  return {
    props: {
      product,
    },
  }
}

interface HomeProps {
  product: ProductCore
}

export default function Home(props: HomeProps) {
  const [quantity, setQuantity] = useState(1)
  const [modal, setModal] = useState(false)

  const { addItemToCart } = useCartData()

  return (
    <Layout>
      <div className="flex-1 flex justify-center">
        {/* <Slider
          onClickImage={() => setModal(true)}
          images={props.product.images}
        /> */}
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
              onClick={() => addItemToCart?.({ ...props.product, quantity })}
              shadow
              text="Add to cart"
              icon={ShoppingIcon}
            />
          </div>
        </Product>
      </div>

      <Modal opened={modal} closeModal={() => setModal(false)}>
        {/* <Slider onClickImage={() => {}} images={props.product.images} /> */}
      </Modal>
    </Layout>
  )
}
