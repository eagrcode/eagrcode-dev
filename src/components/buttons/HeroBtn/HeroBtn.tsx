// styles
import styles from "./HeroBtn.module.scss";

// next
import Link from "next/link";

export default function HeroBtn() {
  return (
    <Link className={styles.link} href="">
      <button className={styles.btn}>Projects</button>
    </Link>
  );
}
