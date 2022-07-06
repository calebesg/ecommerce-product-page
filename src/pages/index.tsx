import { useState } from "react";

import Header from "../components/Header";
import Container from "../components/Container";
import Slider, { SliderImageType } from "../components/Slider";

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

  if (!images) return <div>Loading...</div>;

  return (
    <Container>
      <Header />

      <main className="w-full my-[90px] flex items-center justify-evenly">
        <div className="flex-1 flex justify-center">
          <Slider images={images} />
        </div>

        <div className="flex-1">oi</div>
      </main>
    </Container>
  );
}
