import Image from "next/image";
import { Trash } from "phosphor-react";

import thumb from "../assets/image-product-1-thumbnail.jpg";

export default function ItemCart() {
  return (
    <div className="flex items-center justify-between gap-4">
      <Image
        src={thumb}
        alt="product"
        width={48}
        height={48}
        className="rounded-md"
      />

      <div className="flex-1 flex flex-col leading-normal">
        <strong className="text-grayish_blue-500 dark:text-grayish_blue-400 font-thin text-md">
          Fall Limited Edition Sneakers
        </strong>
        <p className="text-grayish_blue-500 dark:text-grayish_blue-400 text-md">
          $125.00 x 3{" "}
          <span className="text-grayish_blue-800 dark:text-grayish_blue-100 font-bold">
            $375.00
          </span>
        </p>
      </div>

      <button aria-label="Delete item to the cart">
        <Trash size={18} />
      </button>
    </div>
  );
}
