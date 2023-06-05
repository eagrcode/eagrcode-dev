// styles
import styles from "./Skills.module.scss";

// components
import TechGrid from "./TechGrid/TechGrid";

// context
import { useTheme } from "@/context/ThemeProvider";

export default function Skills() {
  // initial state
  const { theme } = useTheme();

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsWrapper}>
        <h2 className={theme}>What Have I Been Learning?</h2>
        <p className={theme}>
          Below are some of the tech skills I have acquired so far, and I continue to expand upon
          this skillset by exploring new ways to solve problems!
        </p>
        <TechGrid />
      </div>
    </section>
  );
}
