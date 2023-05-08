// styles
import styles from "./ProjectCard.module.scss";

// react
import { useState } from "react";

// next
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Slider from "react-slick";

// set prop types
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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className={styles.project}>
      <h3>{title}</h3>

      <div className={styles.swiper}>
        <Image src={image} alt={alt} placeholder="blur" style={{ height: "auto", width: "85%" }} />
        <Image src={image} alt={alt} placeholder="blur" style={{ height: "auto", width: "85%" }} />
        <Image src={image} alt={alt} placeholder="blur" style={{ height: "auto", width: "85%" }} />
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
