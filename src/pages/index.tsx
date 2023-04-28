// next
import Head from "next/head";

// next font
import { Inter } from "next/font/google";
import localFont from "next/font/local";

// styles
import styles from "@/styles/Home.module.scss";

// components
import HeroBtn from "@/components/buttons/HeroBtn/HeroBtn";
import Hero from "@/components/Hero/Hero";

// context
import { useContextProvider } from "@/context/ContextProvider";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../assets/my-font.ttf", fallback: ["sans-serif"] });

export default function Home() {
  // initial state
  const { isOpen } = useContextProvider();

  return (
    <>
      <Head>
        <title>eagrcode</title>
        <meta name="description" content="Portfolio of Web Developer Elliot Robinson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={isOpen ? `${styles.heroSection} ${styles.isOpen}` : styles.heroSection}>
        <Hero />
        <HeroBtn />
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.about}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex impedit deserunt, eius
            esse fugiat itaque sed sunt quidem consequatur debitis laudantium, repellendus accusamus
            reprehenderit ducimus provident ut corrupti architecto?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex impedit deserunt, eius
            esse fugiat itaque sed sunt quidem consequatur debitis laudantium, repellendus accusamus
            reprehenderit ducimus provident ut corrupti architecto?
          </p>
          <div className={styles.techGrid}>
            <FontAwesomeIcon className={styles.gridItem} icon={faReact} />
            <FontAwesomeIcon className={styles.gridItem} icon={faSass} />
            <FontAwesomeIcon className={styles.gridItem} icon={faNodeJs} />
            <FontAwesomeIcon className={styles.gridItem} icon={faCss3} />
            <FontAwesomeIcon className={styles.gridItem} icon={faHtml5} />
            <FontAwesomeIcon className={styles.gridItem} icon={faAws} />
          </div>
        </div>
      </section>
      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
          <li>Project 4</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Contact Me</h2>
      </section>
    </>
  );
}
