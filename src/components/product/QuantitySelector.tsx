import { Minus, Plus } from "phosphor-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (value: number) => void;
}

export default function QuantitySelector(props: QuantitySelectorProps) {
  const add = () => {
    props.onChange(props.quantity + 1);
  };

  const minus = () => {
    if (props.quantity === 0) return;
    props.onChange(props.quantity - 1);
  };

  return (
    <div className="flex items-center justify-between text-orange-500 px-4 h-14 bg-grayish_blue-100 w-[157px] rounded-xl dark:bg-grayish_blue-700 transition-colors">
      <button onClick={minus}>
        <Minus size={16} weight="bold" aria-label="remove to cart" />
      </button>
      <span className="text-grayish_blue-800 dark:text-grayish_blue-100 font-bold">
        {props.quantity}
      </span>
      <button onClick={add}>
        <Plus size={16} weight="bold" aria-label="Add to cart" />
      </button>
    </div>
  );
}
