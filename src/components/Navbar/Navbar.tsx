// styles
import styles from "./Navbar.module.scss";

// components
import Hamburger from "./Hamburger";
import ResumeBtn from "../buttons/ResumeBtn/ResumeBtn";

// next
import Link from "next/link";

// react
import { useState } from "react";

// context
import { useContextProvider } from "@/context/ContextProvider";
import { useTheme } from "@/context/ThemeProvider";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  // initial state
  const { isOpen, setIsOpen } = useContextProvider();
  const [isScroll, setIsScroll] = useState(false);
  const { theme } = useTheme();

  return (
    <aside className={`${styles.sidebar} ${styles[theme]}`}>
      <Link className={`${styles.logo} ${styles[theme]}`} href="/">
        {"<eagrcode"}
        <span style={{ marginLeft: "8px" }}>{"/>"}</span>
      </Link>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={
          isOpen
            ? `${styles.sidebarBtm} ${styles.isOpen} ${styles[theme]}`
            : `${styles.sidebarBtm} ${styles[theme]}`
        }
      >
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={styles.link} href="#scroll-to-about" scroll={false}>
                About
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={styles.link} href="#scroll-to-projects" scroll={false}>
                Projects
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={styles.link} href="#scroll-to-contact" scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ResumeBtn />
        <ul className={styles.socialMenu}>
          <li>
            <Link href="">
              <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              <span className={styles.tooltip}>GitHub</span>
            </Link>
          </li>

          <li>
            <Link href="">
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
