// styles
import styles from "./ProjectCard.module.scss";

// react
import { useState, useRef, createRef, useEffect, useLayoutEffect } from "react";

// next
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// prop types
type props = {
  title: string;
  image: StaticImageData;
  text: string;
  alt: string;
  gitHubUrl: string;
  liveUrl: string;
};

export default function ProjectCard({ title, image, text, alt, gitHubUrl, liveUrl }: props) {
  // initial state
  const [scrollRight, setScrollRight] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  const imgRef = useRef<HTMLImageElement>(null);

  function handleScrollRight() {
    setScrollRight((prev) => !prev);
  }

  // useEffect(() => {
  //   if (imgRef?.current?.clientWidth) {
  //     setWidth(imgRef?.current?.clientWidth);
  //   }
  // }, [width]);

  useEffect(() => {
    const element = imgRef?.current;

    if (!element) return;

    const observer = new ResizeObserver(() => {
      // 👉 Do something when the element is resized
      setWidth(element.clientWidth);
    });

    observer.observe(element);
    return () => {
      // Cleanup the observer by unobserving all elements
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.project}>
      <h3>{title}</h3>

      <div className={styles.swiper}>
        <div
          className={
            scrollRight ? `${styles.swiperInner} ${styles.scrollRight}` : styles.swiperInner
          }
        >
          {/* <div className={`${styles.navigation} ${styles.left}`} onClick={handleScrollRight}>
            <button>Prev</button>
          </div> */}

          <Image
            src={image}
            alt={alt}
            placeholder="blur"
            style={{ height: "auto", width: "85%" }}
            ref={imgRef}
          />

          <Image
            src={image}
            alt={alt}
            placeholder="blur"
            style={{ height: "auto", width: "85%" }}
          />
          <Image
            src={image}
            alt={alt}
            placeholder="blur"
            style={{ height: "auto", width: "85%" }}
          />
          <div className={`${styles.navigation} ${styles.right}`} onClick={handleScrollRight}>
            <button>Next</button>
          </div>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <Link href={gitHubUrl} target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </Link>
        <Link href={liveUrl} target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faLink} />
        </Link>
      </div>
      <p>{text}</p>
    </div>
  );
}
