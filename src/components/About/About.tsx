// styles
import styles from "./About.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";
import { useContextProvider } from "@/context/ContextProvider";

// next
import Image from "next/image";

// images
import fpCert from "../../../public/assets/images/futureproof-cert.png";

export default function About() {
  // initial state
  const { theme } = useTheme();
  const { isOpen } = useContextProvider();

  return (
    <section className={styles.aboutSection}>
      <div className={styles.about}>
        <div className={isOpen ? `${styles.textContainer} ${styles.isOpen}` : styles.textContainer}>
          <h2 id="scroll-to-about" className={theme}>
            About Me
          </h2>
          <div className={styles.btmContainer}>
            <div className={styles.pContainer}>
              <p className={theme}>
                As a former audio engineer deeply fascinated by technology, I am now pursuing a
                career transition into the world of software development. Over the past year, I have
                dedicated myself to acquiring the necessary skills and knowledge to excel in this
                field.
              </p>
              <p className={theme}>
                {`I recently completed my studies in full-stack software engineering at La Fosse
                Academy (formally futureproof), where I collaborated within small teams, employing agile methodologies to
                create fully functional applications.`}
              </p>
              <p className={theme}>
                Since finishing my studies, I am actively expanding my skill set beyond the
                curriculum, learning new technologies to further enhance my capabilities as a
                developer.
              </p>
            </div>
            <div className={styles.img}>
              <Image
                src={fpCert}
                alt="futureproof certification nakamoto cohort"
                style={{ height: "auto", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
