import { StaticImageData } from "next/image";

export interface SliderTypes {
  images: SliderImageType[];
}

export interface SliderImageType {
  key: any;
  src: StaticImageData;
  thumb: StaticImageData;
}
