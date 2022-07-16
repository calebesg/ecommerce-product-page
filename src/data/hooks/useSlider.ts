import { useState } from 'react'

export default function useSlider(maxLength: number) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [animation, setAnimation] = useState(false)

  const goToSlide = (index: number) => {
    setAnimation(true)
    setCurrentSlideIndex(index)

    const timer = setTimeout(() => setAnimation(false), 600)
    return () => clearTimeout(timer)
  }

  const nextSlide = () => {
    const next = maxLength - 1 === currentSlideIndex ? 0 : currentSlideIndex + 1
    goToSlide(next)
  }

  const backSlide = () => {
    const back = currentSlideIndex === 0 ? maxLength - 1 : currentSlideIndex - 1
    goToSlide(back)
  }

  return {
    currentSlideIndex,
    animation,
    nextSlide,
    backSlide,
    goToSlide,
  }
}
