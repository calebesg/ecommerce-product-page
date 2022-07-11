import { useState } from 'react'
import Image from 'next/image'

import { SliderTypes } from '.'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { TabsButton } from './TabsButton'

export default function Slider(props: SliderTypes) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const nextSlide = () => {
    const next =
      props.images.length - 1 === currentSlideIndex ? 0 : currentSlideIndex + 1
    setCurrentSlideIndex(next)
  }

  const backSlide = () => {
    const back =
      currentSlideIndex === 0 ? props.images.length - 1 : currentSlideIndex - 1
    setCurrentSlideIndex(back)
  }

  return (
    <div className="max-w-[445px] w-full">
      <div
        onClick={() => console.log('Open')}
        className="relative h-[100vw] lg:h-[445px] overflow-hidden lg:rounded-2xl"
      >
        <Image src={props.images[currentSlideIndex].src} objectFit="contain" />

        <div
          onClick={e => e.stopPropagation()}
          className="lg:hidden absolute inset-0 p-4 flex items-center justify-between text-grayish_blue-800 z-50"
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

      <div className="hidden lg:flex justify-between mt-8">
        {props.images.map((image, index) => (
          <TabsButton
            key={index}
            index={index}
            onClick={setCurrentSlideIndex}
            thumb={image.thumb}
            active={image.key === props.images[currentSlideIndex].key}
          />
        ))}
      </div>
    </div>
  )
}
