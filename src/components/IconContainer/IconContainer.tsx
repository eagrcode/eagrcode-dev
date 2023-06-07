// styles
import styles from "./IconContainer.module.scss";

// next
import Link from "next/link";

// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// context
import { useTheme } from "@/context/ThemeProvider";

export default function IconContainer() {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={styles.iconContainer}>
      <Link href="https://github.com/eagrcode" aria-label="GitHub profile" target="_blank">
        <FaGithub className={`${styles.icon} ${styles[theme]}`} size={30} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/elliot-robinson/"
        aria-label="LinkedIn profile"
        target="_blank"
      >
        <FaLinkedin className={`${styles.icon} ${styles[theme]}`} size={30} />
      </Link>
    </div>
  );
}
