// styles
import styles from "@/styles/Navbar.module.scss";

// components
import Hamburger from "./Hamburger";

// next
import Link from "next/link";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <aside className={styles.sidebar}>
      <Link className={styles.logo} href="/">
        eagrcode
      </Link>
      <div className={styles.sidebarBtm}>
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
          <Hamburger />
        </nav>
        <ul className={styles.socialMenu}>
          <li>
            <Link href="">
              <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            </Link>
          </li>

          <li>
            <Link href="">
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            </Link>
          </li>

          <li>
            <Link href="">
              <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            </Link>
          </li>
        </ul>
        <div className={styles.line}></div>
      </div>
    </aside>
  );
}
