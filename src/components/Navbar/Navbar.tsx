// styles
import styles from "@/styles/Navbar.module.scss";

// components
import Hamburger from "./Hamburger";

// next
import Link from "next/link";

// react
import { Dispatch, SetStateAction, useState } from "react";

// context
import { useContextProvider } from "@/context/ContextProvider";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  // initial state
  const { isOpen, setIsOpen } = useContextProvider();
  const [isScroll, setIsScroll] = useState(false);

  // tet bg blur on scroll
  function handleScroll() {
    if (window.scrollY >= 64) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  // check for window to allow client side to execute
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <aside className={isScroll ? `${styles.scroll} ${styles.sidebar}` : styles.sidebar}>
      <Link className={styles.logo} href="/">
        {"<eagrcode />"}
      </Link>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={isOpen ? `${styles.sidebarBtm} ${styles.isOpen}` : styles.sidebarBtm}>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link className={styles.link} href="">
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="">
                About
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="">
                Portfolio
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
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
        <div className={styles.line}></div>
      </div>
    </aside>
  );
}
