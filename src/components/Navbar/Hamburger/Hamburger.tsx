// styles
import styles from "./Hamburger.module.scss";

// react
import { Dispatch, SetStateAction } from "react";

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

  return (
    <button aria-label="Menu" className={styles.button} onClick={handleClick}>
      <div className={isOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger}>
        <div className={`${styles.bar} ${styles[theme]}`}></div>
        <div className={`${styles.bar} ${styles[theme]}`}></div>
      </div>
    </button>
  );
}
