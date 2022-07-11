import { StaticImageData } from 'next/image'

export interface SliderTypes {
  images: SliderImageType[]
  onClickImage: () => void
}

export interface SliderImageType {
  key: any
  src: string
  thumb: string
}
