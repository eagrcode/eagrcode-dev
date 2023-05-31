// styles
import styles from "./About.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";
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

export default function About() {
  // initial state
  const { theme } = useTheme();
  const { isOpen } = useContextProvider();

  return (
    <section className={styles.aboutSection}>
      <div className={isOpen ? `${styles.about} ${styles.isOpen}` : styles.about}>
        <div className={styles.textContainer}>
          <h2 id="scroll-to-about" className={theme}>
            About Me
          </h2>
          <div className={styles.btmContainer}>
            <div className={styles.pContainer}>
              <p className={theme}>
                As a former audio engineer with a passion for technology, I am now pursuing a career
                transition into the world of development. Over the past year, I have dedicated
                myself to acquiring the necessary skills and knowledge to excel in this field.
              </p>
              <p className={theme}>
                I recently completed my studies in full-stack software engineering at La Fosse
                Academy, where I collaborated within small teams, employing agile methodologies to
                create fully functional applications. This experience allowed me to develop a solid
                foundation in a range of technologies including HTML, CSS, JavaScript, OOP, REST
                API, Node.js, React, and SQL.
              </p>
              <p className={theme}>
                Since finishing my studies, I am actively expanding my skill set beyond the
                curriculum, learning new technologies such as TypeScript and Next.js, further
                enhancing my capabilities as a developer.
              </p>
            </div>
            <div className={styles.techGrid}>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <FontAwesomeIcon icon={faCss3} />
                <p>Text</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <FontAwesomeIcon icon={faHtml5} />
                <p>Text</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <FontAwesomeIcon icon={faAws} />
                <p>Text</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <FontAwesomeIcon icon={faReact} />
                <p>Text</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <FontAwesomeIcon icon={faSass} />
                <p>Text</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <FontAwesomeIcon icon={faNodeJs} />
                <p>Text</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <FontAwesomeIcon icon={faCss3} />
                <p>Text</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <FontAwesomeIcon icon={faHtml5} />
                <p>Text</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <FontAwesomeIcon icon={faAws} />
                <p>Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
