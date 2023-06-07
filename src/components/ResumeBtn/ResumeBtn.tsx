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
    <Link className={styles.link} href="ELLIOT-ROBINSON-CV.pdf" target="_blank">
      <button className={`${styles.btn} ${styles[theme]}`} title="Open pdf">
        Resume
      </button>
    </Link>
  );
}
