import { Minus, Plus } from 'phosphor-react'

interface QuantitySelectorProps {
  quantity: number
  onChange: (value: number) => void
}

export default function QuantitySelector(props: QuantitySelectorProps) {
  const add = () => {
    props.onChange(props.quantity + 1)
  }

  const minus = () => {
    if (props.quantity === 1) return
    props.onChange(props.quantity - 1)
  }

  return (
    <div className="px-4 h-14 w-full lg:w-[157px] rounded-xl flex items-center justify-between text-orange-500 bg-grayish_blue-100 dark:bg-grayish_blue-700 transition-colors">
      <button
        className="active:opacity-0 transition-opacity duration-100"
        onClick={minus}
      >
        <Minus size={16} weight="bold" aria-label="remove to cart" />
      </button>
      <span className="font-bold text-grayish_blue-800 dark:text-grayish_blue-100">
        {props.quantity}
      </span>
      <button
        className="active:opacity-0 transition-opacity duration-100"
        onClick={add}
      >
        <Plus size={16} weight="bold" aria-label="Add to cart" />
      </button>
    </div>
  )
}
