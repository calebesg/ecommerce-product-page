import Image from 'next/image'
import { CaretLeft, CaretRight } from 'phosphor-react'
import ProductImage from 'src/core/ProductImage'
import { useSlider } from 'src/data/hooks'

import { SliderIndicator } from '.'

interface InteractiveSliderProps {
  images: ProductImage[]
  onClickImage?: () => void
}

export default function InteractiveSlider(props: InteractiveSliderProps) {
  const { goToSlide, animation, backSlide, nextSlide, currentSlideIndex } =
    useSlider(props.images.length)

  return (
    <div className="w-screen md:w-[445px]">
      <div
        onClick={props?.onClickImage}
        className="relative w-full h-[100vw] md:h-[445px] overflow-hidden md:rounded-2xl"
      >
        <Image
          className={`${animation ? 'animate-ping' : ''}`}
          src={props.images[currentSlideIndex].src}
          objectFit="contain"
          layout="fill"
          alt="Sneakers"
        />

        <div
          onClick={e => e.stopPropagation()}
          className="md:hidden absolute inset-0 p-4 flex items-center justify-between text-grayish_blue-800"
        >
          <button
            onClick={backSlide}
            className="bg-white/80 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center active:scale-110 transition-all"
          >
            <CaretLeft size={20} weight="bold" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center active:scale-110 transition-all"
          >
            <CaretRight size={20} weight="bold" />
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-between mt-8">
        {props.images.map((image, index) => (
          <SliderIndicator
            key={index}
            index={index}
            onClick={goToSlide}
            thumb={image.thumb}
            active={index === currentSlideIndex}
          />
        ))}
      </div>
    </div>
  )
}
