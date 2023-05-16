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
    <section id="scroll-to-about" className={styles.aboutSection}>
      <div className={isOpen ? `${styles.about} ${styles.isOpen}` : styles.about}>
        <div className={styles.textContainer}>
          <h2 className={theme}>About Me</h2>
          <div className={styles.aboutText}>
            <p className={theme}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex impedit deserunt,
              eius esse fugiat itaque sed sunt quidem consequatur debitis laudantium, repellendus
              accusamus reprehenderit ducimus provident ut corrupti architecto?
            </p>
            <p className={theme}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex impedit deserunt,
              eius esse fugiat itaque sed sunt quidem consequatur debitis laudantium, repellendus
              accusamus reprehenderit ducimus provident ut corrupti architecto?
            </p>
          </div>
        </div>
        <div className={styles.techGrid}>
          <div className={styles.gridItem}>
            <FontAwesomeIcon icon={faCss3} />
          </div>
          <div className={styles.gridItem}>
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div className={styles.gridItem}>
            <FontAwesomeIcon icon={faAws} />
          </div>
          <div className={styles.gridItem}>
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className={styles.gridItem}>
            <FontAwesomeIcon icon={faSass} />
          </div>
          <div className={styles.gridItem}>
            <FontAwesomeIcon icon={faNodeJs} />
          </div>
          <div className={styles.gridItem}>
            <FontAwesomeIcon icon={faCss3} />
          </div>
          <div className={styles.gridItem}>
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div className={styles.gridItem}>
            <FontAwesomeIcon icon={faAws} />
          </div>
        </div>
      </div>
    </section>
  );
}
