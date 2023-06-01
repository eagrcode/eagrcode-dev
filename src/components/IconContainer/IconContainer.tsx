// styles
import styles from "./IconContainer.module.scss";

// next
import Link from "next/link";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// context
import { useTheme } from "@/context/ThemeProvider";

export default function IconContainer() {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={styles.iconContainer}>
      <Link href="" aria-label="GitHub profile">
        <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faGithub} />
      </Link>
      <Link href="" aria-label="LinkedIn profile">
        <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faLinkedin} />
      </Link>
    </div>
  );
}
