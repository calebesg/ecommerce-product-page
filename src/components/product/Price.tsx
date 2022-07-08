interface PriceProps {
  price: number
  discount: number // type % => 50
}

export default function Price(props: PriceProps) {
  const finalPrice = props.price * (props.discount / 100)

  return (
    <div className="mt-7 flex justify-between items-center lg:flex-col lg:items-start">
      <div className="flex items-center gap-3 transition-colors">
        <strong className="text-2xl">${finalPrice.toFixed(2)}</strong>
        <span className="bg-orange-100 rounded px-2 text-sm text-orange-500 font-bold dark:bg-orange-700 dark:text-orange-200 transition-colors">
          {props.discount}%
        </span>
      </div>
      <del className="text-grayish_blue-400 dark:text-grayish_blue-500 transition-colors">
        ${props.price.toFixed(2)}
      </del>
    </div>
  )
}
