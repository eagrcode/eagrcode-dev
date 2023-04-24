// styles
import styles from "./ResumeBtn.module.scss";

// next
import Link from "next/link";

export default function ResumeBtn() {
  return (
    <Link className={styles.link} href="">
      <button className={styles.btn}>Resume</button>
    </Link>
  );
}
