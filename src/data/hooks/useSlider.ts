import { useRef, useState } from 'react'

export default function useSlider(maxLength: number) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const refSlide = useRef<HTMLDivElement | null>(null)

  const goToSlide = (index: number) => {
    if (!refSlide.current) return

    const size = Math.abs(100 * index)

    refSlide.current.style.transform = `translateX(-${size}%)`
    setCurrentSlideIndex(index)
  }

  const nextSlide = () => {
    const index =
      maxLength - 1 === currentSlideIndex ? 0 : currentSlideIndex + 1
    goToSlide(index)
  }

  const backSlide = () => {
    const index =
      currentSlideIndex === 0 ? maxLength - 1 : currentSlideIndex - 1
    goToSlide(index)
  }

  return {
    currentSlideIndex,
    nextSlide,
    backSlide,
    goToSlide,
    refSlide,
  }
}
