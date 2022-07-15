import { Popover } from '@headlessui/react'
import { ShoppingCart as ShoppingIcon } from 'phosphor-react'
import { useCartData } from '../../data/hooks'
import { WidgetCart } from './'

export default function ShoppingCart() {
  const { totalItems } = useCartData()

  return (
    <Popover className="lg:relative flex flex-col justify-center">
      <Popover.Button
        className="relative text-grayish_blue-800 dark:text-grayish_blue-100 transition-colors"
        aria-label="shopping cart"
      >
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 px-2 bg-orange-500 text-white text-[9px] rounded-lg">
            {totalItems}
          </span>
        )}
        <ShoppingIcon size={26} width="light" />
      </Popover.Button>

      <Popover.Panel className="absolute top-[76px] lg:top-14 z-10 max-w-screen w-full left-0 px-2 lg:w-[360px] lg:-translate-x-1/2">
        <WidgetCart />
      </Popover.Panel>
    </Popover>
  )
}
