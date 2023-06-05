// styles
import styles from "./TechGrid.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";

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

export default function TechGrid() {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={styles.techGrid}>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <SiHtml5 size={35} />
        <p>HTML5</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <SiCss3 size={35} />
        <p>CSS3</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <SiJavascript size={35} />
        <p>JavaScript</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <SiNodedotjs size={35} />
        <p>Node.js</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <SiReact size={35} />
        <p>React</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <SiSass size={35} />
        <p>Sass</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <SiNextdotjs size={35} />
        <p>Next.js</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <SiTypescript size={35} />
        <p>TypeScript</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <SiGit size={35} />
        <p>Git</p>
      </div>
    </div>
  );
}
