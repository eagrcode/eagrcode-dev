// styles
import styles from "@/styles/Hamburger.module.scss";

// react
import { use, useState } from "react";

export default function Hamburger() {
  // state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
      <div className={isOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </button>
  );
}
