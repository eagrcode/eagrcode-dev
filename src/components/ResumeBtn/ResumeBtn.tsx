// styles
import styles from "./ResumeBtn.module.scss";

// next
import Link from "next/link";

// context
import { useTheme } from "@/context/ThemeProvider";

export default function ResumeBtn() {
  // initial state
  const { theme } = useTheme();

  return (
    <Link className={styles.link} href="">
      <button className={`${styles.btn} ${styles[theme]}`}>Resume</button>
    </Link>
  );
}
