// styles
import styles from "./ProjectCard.module.scss";

// react
import { useState, useRef, useEffect } from "react";

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
  description: string;
  links: {
    github: string;
    live: string;
  };
  tags:
    | { 1: string; 2: string; 3: string; 4: string; 5: string }
    | { 1: string; 2: string; 3: string; 4: string; 5?: undefined }
    | { 1: string; 2: string; 3: string; 4?: undefined; 5?: undefined };
  images: {
    1: StaticImageData;
    2: StaticImageData;
    3: StaticImageData;
  };
  alt: string;
};

export default function ProjectCard({ title, description, links, tags, images, alt }: props) {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={styles.project}>
      <div className={styles.swiper}>
        <div className={styles.swiperInner}>
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

      <div className={styles.titleContainer}>
        <h3 className={theme}>{title}</h3>
        <div className={styles.iconContainer}>
          <Link href={links.github} target="_blank" title="Source code">
            <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faGithub} />
          </Link>
          <Link href={links.live} target="_blank" title="Live deployment">
            <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faLink} />
          </Link>
        </div>
      </div>

      <p className={theme}>{description}</p>

      <div className={styles.tagContainer}>
        <div className={`${styles.tag} ${styles[theme]}`}>{tags[1]}</div>
        <div className={`${styles.tag} ${styles[theme]}`}>{tags[2]}</div>
        <div className={`${styles.tag} ${styles[theme]}`}>{tags[3]}</div>
        {tags[4] && <div className={`${styles.tag} ${styles[theme]}`}>{tags[4]}</div>}
        {tags[5] && <div className={`${styles.tag} ${styles[theme]}`}>{tags[5]}</div>}
      </div>
    </div>
  );
}
