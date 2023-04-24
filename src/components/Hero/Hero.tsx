// styles
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <p className={styles.hi}>Hi, my name is</p>
      <h1 className={styles.h1}>Elliot Robinson</h1>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem molestiae sed harum dolorum
        saepe provident accusantium veniam facilis, sunt placeat dolorem quis. Ad quasi illum esse
        quam? Aspernatur, repellendus excepturi?
      </p>
    </div>
  );
}
