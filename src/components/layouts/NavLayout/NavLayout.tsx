// components
import Navbar from "@/components/Navbar/Navbar";

// styles
import styles from "@/styles/NavLayout.module.scss";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
