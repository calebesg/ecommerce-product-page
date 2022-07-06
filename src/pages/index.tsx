import { useState } from "react";

import Header from "../components/Header";
import Container from "../components/Container";
import Slider, { SliderImageType } from "../components/Slider";
import { ShoppingCart as ShoppingIcon, Plus, Minus } from "phosphor-react";

import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";
import thumb1 from "../assets/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/image-product-4-thumbnail.jpg";

const imagesMock: SliderImageType[] = [
  {
    key: "dskljf12",
    src: image1,
    thumb: thumb1,
  },
  {
    key: "dskljirgj2",
    src: image2,
    thumb: thumb2,
  },
  {
    key: "dskljir342",
    src: image3,
    thumb: thumb3,
  },
  {
    key: "dskljir123",
    src: image4,
    thumb: thumb4,
  },
];

export default function Home() {
  const [images, setImages] = useState<SliderImageType[] | null>(imagesMock);
  const [qtd, setQtd] = useState(0);

  if (!images) return <div>Loading...</div>;

  return (
    <Container>
      <Header />

      <main className="w-full my-[90px] flex items-center justify-evenly">
        <div className="flex-1 flex justify-center">
          <Slider images={images} />
        </div>

        <div className="flex-1 flex justify-center">
          <div className="max-w-[445px] w-full flex flex-col gap-8">
            <span className="uppercase text-orange-500 text-sm font-bold">
              sneaker company
            </span>

            <h1 className="text-5xl font-bold">
              Fall Limited Edition Sneakers
            </h1>

            <p className="text-grayish_blue-500">
              These low-profile sneakers are you perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>

            <div>
              <div>
                <strong>$125.00</strong>
                <span>50%</span>
              </div>
              <span>$250.00</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-between text-orange-500 px-4 h-14 bg-grayish_blue-100 w-[157px] rounded-xl">
                <button onClick={() => setQtd(qtd - 1)}>
                  <Minus size={16} weight="bold" />
                </button>
                <span className="text-grayish_blue-800">{qtd}</span>
                <button onClick={() => setQtd(qtd + 1)}>
                  <Plus size={16} weight="bold" />
                </button>
              </div>

              <button className="flex-1 h-14 flex items-center justify-center gap-4 font-bold rounded-xl bg-orange-500 hover:bg-orange-600 transition-colors text-white shadow-button">
                <ShoppingIcon size={18} weight="bold" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
