// styles
import styles from "./ProjectCard.module.scss";

// react
import { useState, useRef, createRef, useEffect, useLayoutEffect } from "react";

// next
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// context
import { useTheme } from "@/context/ThemeProvider";

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
  const { theme } = useTheme();
  const [scrollRight, setScrollRight] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  function handleRightClick() {
    setScrollRight(true);
  }

  return (
    <div className={styles.project}>
      <div className={styles.swiper}>
        <div className={styles.swiperInner}>
          <div className={styles.img}>
            <Image
              className={scrollRight ? `${styles.scrollRight}` : ""}
              src={image}
              alt={alt}
              placeholder="blur"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
          <div className={styles.img}>
            <Image
              className={scrollRight ? `${styles.scrollRight}` : ""}
              id="slide-2"
              src={image}
              alt={alt}
              placeholder="blur"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
          <div className={styles.img}>
            <Image
              className={scrollRight ? `${styles.scrollRight}` : ""}
              src={image}
              alt={alt}
              placeholder="blur"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        </div>
        {/* <div onClick={handleRightClick} className={`${styles.navigation} ${styles.right}`}>
          <button>Next</button>
        </div> */}
      </div>
      <div className={styles.titleContainer}>
        <h3 className={theme}>{title}</h3>
        <div className={styles.iconContainer}>
          <Link href={gitHubUrl} target="_blank" title="Source code">
            <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faGithub} />
          </Link>
          <Link href={liveUrl} target="_blank" title="Live deployment">
            <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faLink} />
          </Link>
        </div>
      </div>

      <p className={theme}>{text}</p>

      <div className={styles.tagContainer}>
        <div className={`${styles.tag} ${styles[theme]}`}>React</div>
        <div className={`${styles.tag} ${styles[theme]}`}>TMDB api</div>
        <div className={`${styles.tag} ${styles[theme]}`}>Netlify</div>
        <div className={`${styles.tag} ${styles[theme]}`}>ViteJS</div>
      </div>
    </div>
  );
}
