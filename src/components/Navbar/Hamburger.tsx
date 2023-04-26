// styles
import styles from "@/styles/Hamburger.module.scss";
import { Dispatch, SetStateAction, useEffect } from "react";

// set component prop types
type props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Hamburger({ isOpen, setIsOpen }: props) {
  // toggle nav menu
  function handleClick() {
    setIsOpen(!isOpen);
  }

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
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </button>
  );
}
