// styles
import styles from "./Navbar.module.scss";

// components
import Hamburger from "./Hamburger/Hamburger";
import ResumeBtn from "@/components/ResumeBtn/ResumeBtn";

// next
import Link from "next/link";

// context
import { useContextProvider } from "@/context/ContextProvider";
import { useTheme } from "@/context/ThemeProvider";

// icons
import { LuSunDim } from "react-icons/lu";
import { SiMoonrepo } from "react-icons/si";

export default function Navbar() {
  // initial state
  const { isOpen, setIsOpen } = useContextProvider();
  const { theme, setTheme } = useTheme();

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <nav className={styles.nav}>
        <Link className={`${styles.logo} ${styles[theme]}`} href="/">
          {"<EAGRcode"}
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
              <Link className={`${styles.link} ${styles[theme]}`} href="#about" scroll={false}>
                About
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={`${styles.link} ${styles[theme]}`} href="#skills" scroll={false}>
                Skills
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={`${styles.link} ${styles[theme]}`} href="#projects" scroll={false}>
                Projects
              </Link>
            </li>
            <li className={styles.item} onClick={() => setIsOpen(false)}>
              <Link className={`${styles.link} ${styles[theme]}`} href="#contact" scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
          <ResumeBtn />
          <button title="Toggle theme" className={styles.toggle}>
            {theme === "dark" ? (
              <LuSunDim
                className={`${styles.icon} ${styles[theme]}`}
                onClickCapture={() => setTheme("light")}
                size={30}
                title="Toggle theme"
              />
            ) : (
              <SiMoonrepo
                className={`${styles.icon} ${styles[theme]}`}
                onClickCapture={() => setTheme("dark")}
                size={30}
                title="Toggle theme"
              />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
