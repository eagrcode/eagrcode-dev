// styles
import styles from "./Footer.module.scss";

// next
import Link from "next/link";

// context
import { useTheme } from "@/context/ThemeProvider";

export default function Footer() {
  // initial state
  const { theme } = useTheme();

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <p className={theme}>Developed with Next.JS by Elliot Robinson</p>
      <Link
        className={`${styles.link} ${styles[theme]}`}
        href="https://github.com/eagrcode/eagrcode-dev"
        target="_blank"
        title="View the repo"
      >
        [ source code ]
      </Link>
    </footer>
  );
}
