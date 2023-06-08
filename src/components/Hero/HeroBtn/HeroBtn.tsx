// styles
import styles from "./HeroBtn.module.scss";

// next
import Link from "next/link";

// context
import { useTheme } from "@/context/ThemeProvider";

export default function HeroBtn() {
  // initial state
  const { theme } = useTheme();

  return (
    <Link className={styles.link} href="#projects" scroll={false}>
      <button className={`${styles.btn} ${styles[theme]}`}>Projects</button>
    </Link>
  );
}
