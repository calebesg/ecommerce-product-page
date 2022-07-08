import Image from 'next/image'
import { Trash } from 'phosphor-react'
import { Product } from '../../data/contexts/types'
import { calcDiscount } from '../../utils/calcDiscount'

interface ItemCartProps {
  product: Product
  removeItemCart: (id: number) => void
}

export default function ItemCart({ product, removeItemCart }: ItemCartProps) {
  const priceDiscount = calcDiscount(product.price, product.discount)

  return (
    <div className="flex items-center justify-between gap-4">
      <Image
        src={require('../../assets/image-product-1-thumbnail.jpg')}
        alt="product"
        width={48}
        height={48}
        className="rounded-md"
      />

      <div className="flex-1 flex flex-col leading-normal">
        <strong className="text-grayish_blue-500 dark:text-grayish_blue-400 font-thin text-md">
          {product.title}
        </strong>
        <p className="text-grayish_blue-500 dark:text-grayish_blue-400 text-md flex gap-1">
          <span>{`$${priceDiscount.toFixed(2)} x ${product.quantity}`}</span>
          <span className="text-grayish_blue-800 dark:text-grayish_blue-100 font-bold">
            {`$${(priceDiscount * product.quantity).toFixed(2)}`}
          </span>
        </p>
      </div>

      <button
        onClick={() => removeItemCart(product.id)}
        aria-label="Delete item to the cart"
      >
        <Trash size={18} />
      </button>
    </div>
  )
}
