// styles
import styles from "./Hero.module.scss";

// next
import Image from "next/image";

// components
import HeroBtn from "@/components/Hero/HeroBtn/HeroBtn";

// context
import { useContextProvider } from "@/context/ContextProvider";
import { useTheme } from "@/context/ThemeProvider";

// images
import HeroImg from "@/assets/images/hero-img.png";

export default function Hero() {
  // initial state
  const { theme } = useTheme();

  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <p className={`${styles.hi} ${styles[theme]}`}>Hi, my name is</p>
        <h1 className={`${styles.h1} ${styles[theme]}`}>Elliot Robinson</h1>
        <p className={`${styles.p} ${theme}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem molestiae sed harum
          dolorum saepe provident accusantium veniam facilis, sunt placeat dolorem quis. Ad quasi
          illum esse quam? Aspernatur, repellendus excepturi?
        </p>
        <Image
          className={styles.img}
          src={HeroImg}
          alt="vsc-hero"
          style={{ height: "auto", width: "100%" }}
        />
        <HeroBtn />
      </div>
    </section>
  );
}
