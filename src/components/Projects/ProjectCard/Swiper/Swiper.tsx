// styles
import styles from "./Swiper.module.scss";

// next
import Image, { StaticImageData } from "next/image";

// react
import { useState, TouchEvent, Dispatch, SetStateAction } from "react";

// prop types
type Props = {
  images: {
    [key: string]: StaticImageData;
  };
  alt: string;
  activeIndex: number;
};

export default function Swiper({ images, alt, activeIndex }: Props) {
  return (
    <div className={styles.swiper}>
      <div
        className={styles.swiperInner}
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {Object.keys(images).map((key) => (
          <div key={key} className={styles.img}>
            <Image alt={alt} src={images[key]} style={{ height: "auto", width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
