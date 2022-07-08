import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { SliderTypes } from '.'

export default function Slider(props: SliderTypes) {
  const [currentSlide, setCurrentSlide] = useState(props.images[0])

  const renderThumbs = () =>
    props.images.map(image => {
      return (
        <button
          key={image.key}
          onClick={() => setCurrentSlide(image)}
          className={classNames(
            'w-[88px] h-[88px] rounded-2xl hover:scale-[1.1] transition-all overflow-hidden relative',
            {
              'border-2 border-orange-500 after:inset-0 after:absolute after:bg-white after:opacity-60':
                currentSlide.key === image.key,
            }
          )}
        >
          <Image src={image.thumb} objectFit="contain" alt="teste" />
        </button>
      )
    })

  return (
    <div className="max-w-[445px] w-full">
      <div className="relative h-[100vw] lg:h-[445px] overflow-hidden lg:rounded-2xl transition-all">
        {currentSlide && <Image src={currentSlide.src} objectFit="contain" />}
      </div>

      <div className="hidden lg:flex justify-between mt-8">
        {renderThumbs()}
      </div>
    </div>
  )
}
