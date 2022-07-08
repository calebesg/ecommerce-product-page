import { ItemCart } from './'
import Button from '../template/Button'
import { useCartData } from '../../data/hooks'

export default function WidgetCart() {
  const { items, removeItemCart } = useCartData()

  const renderContent = function () {
    return (
      <>
        <div className="px-6 my-6 max-h-24 h-auto overflow-y-scroll flex flex-col gap-4 scrollbar-thin scrollbar-thumb-grayish_blue-500 scrollbar-track-grayish_blue-100 dark:scrollbar-track-grayish_blue-700">
          {items.map((item, index) => (
            <ItemCart
              key={index}
              product={item}
              removeItemCart={removeItemCart}
            />
          ))}
        </div>

        <footer className="px-6 pb-8">
          <Button onClick={() => {}} text="Checkout" shadow={false} />
        </footer>
      </>
    )
  }

  return (
    <div className="bg-white dark:bg-grayish_blue-800 rounded-xl shadow-2xl w-full">
      <header className="border-b border-grayish_blue-400 dark:border-grayish_blue-700 p-6">
        <strong>Cart</strong>
      </header>

      {items.length > 0 ? (
        renderContent()
      ) : (
        <div className="h-44 flex items-center justify-center text-grayish_blue-500 font-bold text-sm">
          Your cart is empty.
        </div>
      )}
    </div>
  )
}
