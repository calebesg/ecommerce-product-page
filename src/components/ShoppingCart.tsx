import { Popover } from "@headlessui/react";
import { ShoppingCart as ShoppingIcon } from "phosphor-react";
import WidgetCart from "./WidgetCart";

export default function ShoppingCart() {
  return (
    <Popover className="relative">
      <Popover.Button
        className="relative text-grayish_blue-800 dark:text-grayish_blue-100 transition-colors"
        aria-label="shopping cart"
      >
        <span className="absolute -top-1 -right-1 px-2 bg-orange-500 text-white text-[9px] rounded-lg">
          2
        </span>
        <ShoppingIcon size={26} width="light" />
      </Popover.Button>

      <Popover.Panel className="absolute top-14 z-10 w-[360px] -translate-x-1/2">
        <WidgetCart />
      </Popover.Panel>
    </Popover>
  );
}
