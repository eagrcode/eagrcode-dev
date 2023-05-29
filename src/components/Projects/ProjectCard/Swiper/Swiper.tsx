// styles
import styles from "./Swiper.module.scss";

// next
import Image, { StaticImageData } from "next/image";

// prop types
type props = {
  images: {
    "1": StaticImageData;
    "2": StaticImageData;
    "3": StaticImageData;
  };
  alt: string;
  activeIndex: number;
};

export default function Swiper({ images, alt, activeIndex }: props) {
  return (
    <div className={styles.swiper}>
      <div
        className={styles.swiperInner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Object.keys(images).map((image, index) => (
          <div key={index} className={styles.img}>
            <Image
              alt={alt}
              src={images[image as keyof typeof images]}
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
