// styles
import styles from "./About.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";
import { useContextProvider } from "@/context/ContextProvider";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiNextdotjs,
  SiGit,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faCss3,
  faHtml5,
  faNode,
  faReact,
  faSass,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

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
                <SiHtml5 size={40} />
                <p>HTML5</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <SiCss3 size={40} />
                <p>CSS3</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <SiJavascript size={40} />
                <p>JavaScript</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <SiNodedotjs size={40} />
                <p>Node.js</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <SiReact size={40} />
                <p>React</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <SiSass size={40} />
                <p>Sass</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <SiNextdotjs size={40} />
                <p>Next.js</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <SiTypescript size={40} />
                <p>TypeScript</p>
              </div>
              <div className={`${styles.gridItem} ${styles[theme]}`}>
                <SiGit size={40} />
                <p>Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
