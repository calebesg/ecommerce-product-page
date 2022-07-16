import { useEffect, useRef, useState } from 'react'

export default function useSlider(maxLength: number) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const refSlide = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!refSlide.current) return

    const screenW = window.screen.width
    const size =
      screenW > 768 ? currentSlideIndex * 445 : currentSlideIndex * screenW
    const translate = `translateX(-${size}px)`

    refSlide.current.style.transform = translate
  }, [currentSlideIndex])

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index)
  }

  const nextSlide = () => {
    const next = maxLength - 1 === currentSlideIndex ? 0 : currentSlideIndex + 1
    setCurrentSlideIndex(next)
  }

  const backSlide = () => {
    const back = currentSlideIndex === 0 ? maxLength - 1 : currentSlideIndex - 1
    setCurrentSlideIndex(back)
  }

  return {
    currentSlideIndex,
    nextSlide,
    backSlide,
    goToSlide,
    refSlide,
  }
}
