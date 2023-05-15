// styles
import styles from "./About.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";

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

  return (
    <section id="scroll-to-about" className={styles.aboutSection}>
      <div className={styles.about}>
        <h2 className={theme}>About Me</h2>
        <div className={styles.aboutBtm}>
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
          <div className={styles.techGrid}>
            <FontAwesomeIcon className={styles.gridItem} icon={faReact} />
            <FontAwesomeIcon className={styles.gridItem} icon={faSass} />
            <FontAwesomeIcon className={styles.gridItem} icon={faNodeJs} />
            <FontAwesomeIcon className={styles.gridItem} icon={faCss3} />
            <FontAwesomeIcon className={styles.gridItem} icon={faHtml5} />
            <FontAwesomeIcon className={styles.gridItem} icon={faAws} />
          </div>
        </div>
      </div>
    </section>
  );
}
