// styles
import styles from "./Swiper.module.scss";

// next
import Image, { StaticImageData } from "next/image";

// react
import { Dispatch, SetStateAction } from "react";

// context
import { useTheme } from "@/context/ThemeProvider";

// react-swipeable
import { useSwipeable } from "react-swipeable";

// prop types
type Props = {
  images: {
    [key: string]: StaticImageData;
  };
  alt: string;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

export default function Swiper({ images, alt, activeIndex, setActiveIndex }: Props) {
  // initial state
  const { theme } = useTheme();

  const handleSwipeLeft = () => {
    if (activeIndex < Object.keys(images).length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    swipeDuration: 1000,
    preventScrollOnSwipe: true,
  });

  return (
    <div {...swipeHandlers} className={`${styles.swiper} ${styles[theme]}`}>
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
