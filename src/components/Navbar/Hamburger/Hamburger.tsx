// styles
import styles from "./Hamburger.module.scss";

// react
import { Dispatch, SetStateAction, useEffect } from "react";

// context
import { useTheme } from "@/context/ThemeProvider";

// set prop types
type props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Hamburger({ isOpen, setIsOpen }: props) {
  // initial state
  const { theme } = useTheme();

  // toggle nav menu
  function handleClick() {
    setIsOpen(!isOpen);
  }

  // disable body scroll when isOpen
  useEffect(() => {
    if (isOpen) {
      document.body.className = "noScroll";
    } else {
      document.body.className = "";
    }
  }, [isOpen]);

  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={isOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger}>
        <div className={`${styles.bar} ${styles[theme]}`}></div>
        <div className={`${styles.bar} ${styles[theme]}`}></div>
      </div>
    </button>
  );
}
