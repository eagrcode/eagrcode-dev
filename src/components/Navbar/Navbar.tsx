// styles
import styles from "./Navbar.module.scss";

// components
import Hamburger from "./Hamburger/Hamburger";
import ResumeBtn from "@/components/ResumeBtn/ResumeBtn";

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
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  // initial state
  const { isOpen, setIsOpen } = useContextProvider();
  const [isScroll, setIsScroll] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <nav className={styles.nav}>
        <Link className={`${styles.logo} ${styles[theme]}`} href="/">
          {"<eagrcode"}
          <span style={{ marginLeft: "8px" }}>{"/>"}</span>
        </Link>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={
            isOpen
              ? `${styles.menuContainer} ${styles.isOpen} ${styles[theme]}`
              : `${styles.menuContainer} ${styles[theme]}`
          }
        >
          <ul className={styles.menu}>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link
                className={`${styles.link} ${styles[theme]}`}
                href="#scroll-to-about"
                scroll={false}
              >
                About
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link
                className={`${styles.link} ${styles[theme]}`}
                href="#scroll-to-projects"
                scroll={false}
              >
                Projects
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link
                className={`${styles.link} ${styles[theme]}`}
                href="#scroll-to-contact"
                scroll={false}
              >
                Contact
              </Link>
            </li>
          </ul>

          <ResumeBtn />
          {/* <ul className={styles.socialMenu}>
            <li>
              <Link href="">
                <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faGithub} />
              </Link>
            </li>
            <li>
              <Link href="">
                <FontAwesomeIcon className={`${styles.icon} ${styles[theme]}`} icon={faLinkedin} />
              </Link>
            </li>
          </ul> */}
          <div className={styles.toggle}>
            <FontAwesomeIcon
              className={`${styles.icon} ${styles[theme]}`}
              icon={theme === "dark" ? faLightbulb : faMoon}
              onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
