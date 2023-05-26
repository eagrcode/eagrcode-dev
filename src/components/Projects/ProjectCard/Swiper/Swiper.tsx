// styles
import styles from "./Swiper.module.scss";

// react
import { useState } from "react";

// next
import Image, { StaticImageData } from "next/image";

// prop types
type props = {
  images: {
    1: StaticImageData;
    2: StaticImageData;
    3: StaticImageData;
  };
  alt: string;
  activeIndex: number;
};

export default function Swiper({ images, alt, activeIndex }: props) {
  return (
    <div className={styles.swiper}>
      <div
        className={styles.swiperInner}
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        <div className={styles.img}>
          <Image alt={alt} src={images[1]} style={{ height: "auto", width: "100%" }} />
        </div>
        <div className={styles.img}>
          <Image alt={alt} src={images[2]} style={{ height: "auto", width: "100%" }} />
        </div>
        <div className={styles.img}>
          <Image alt={alt} src={images[3]} style={{ height: "auto", width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
