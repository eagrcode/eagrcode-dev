// styles
import styles from "./Hero.module.scss";

// next
import Image from "next/image";
import Link from "next/link";

// components
import HeroBtn from "@/components/Hero/HeroBtn/HeroBtn";
import IconContainer from "../IconContainer/IconContainer";

// context
import { useContextProvider } from "@/context/ContextProvider";
import { useTheme } from "@/context/ThemeProvider";

// images
import HeroImg from "@/assets/images/hero-img.png";

export default function Hero() {
  // initial state
  const { theme } = useTheme();
  const { isOpen } = useContextProvider();

  return (
    <section className={styles.heroSection}>
      <div className={isOpen ? `${styles.hero} ${styles.isOpen}` : styles.hero}>
        {/* <p className={`${styles.hi} ${styles[theme]}`}>Hi, my name is</p> */}
        <h1 className={`${styles.h1} ${styles[theme]}`}>Elliot Robinson</h1>
        <p className={`${styles.p} ${theme}`}>
          Front-End Developer, with a passion for creating elegant and responsive Web Applications
        </p>
        <HeroBtn />
        <IconContainer />
      </div>
    </section>
  );
}
