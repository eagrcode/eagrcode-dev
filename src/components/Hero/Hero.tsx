// styles
import styles from "./Hero.module.scss";

// next
import Image from "next/image";
import Link from "next/link";

// components
import HeroBtn from "@/components/Hero/HeroBtn/HeroBtn";

// context
import { useContextProvider } from "@/context/ContextProvider";
import { useTheme } from "@/context/ThemeProvider";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// images
import HeroImg from "@/assets/images/hero-img.png";

export default function Hero() {
  // initial state
  const { theme } = useTheme();
  const { isOpen } = useContextProvider();

  return (
    <section className={styles.heroSection}>
      <div className={isOpen ? `${styles.hero} ${styles.isOpen}` : styles.hero}>
        {/* <Image
          className={styles.img}
          src={HeroImg}
          alt="vsc-hero"
          style={{ height: "auto", width: "100%" }}
        /> */}
        <p className={`${styles.hi} ${styles[theme]}`}>Hi, my name is</p>
        <h1 className={`${styles.h1} ${styles[theme]}`}>Elliot Robinson</h1>
        <p className={`${styles.p} ${theme}`}>
          I'm a Front-End Developer, with a passion for creating elegant and responsive Web
          Applications
        </p>
        <HeroBtn />
        <div className={styles.iconContainer}>
          <Link href="" aria-label="GitHub profile">
            <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faGithub} />
          </Link>
          <Link href="" aria-label="LinkedIn profile">
            <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </section>
  );
}
