import Image from 'next/image'
import { useState } from 'react'

import { CaretLeft, CaretRight } from 'phosphor-react'
import { TabsButton } from './TabsButton'

interface SliderTypes {
  images: SliderImageType[]
  onClickImage: () => void
}

interface SliderImageType {
  key: any
  src: string
  thumb: string
}

export default function Slider(props: SliderTypes) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [animation, setAnimation] = useState(false)

  const goToSlide = (index: number) => {
    setAnimation(true)
    setTimeout(() => {
      setCurrentSlideIndex(index)
      setAnimation(false)
    }, 600)
  }

  const nextSlide = () => {
    const next =
      props.images.length - 1 === currentSlideIndex ? 0 : currentSlideIndex + 1
    goToSlide(next)
  }

  const backSlide = () => {
    const back =
      currentSlideIndex === 0 ? props.images.length - 1 : currentSlideIndex - 1
    goToSlide(back)
  }

  return (
    <div className="w-screen md:w-[445px]">
      <div
        onClick={props.onClickImage}
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
          <TabsButton
            key={index}
            index={index}
            onClick={goToSlide}
            thumb={image.thumb}
            active={image.key === props.images[currentSlideIndex].key}
          />
        ))}
      </div>
    </div>
  )
}
