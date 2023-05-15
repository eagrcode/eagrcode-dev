// components
import Navbar from "@/components/Navbar/Navbar";

// styles
import styles from "./NavLayout.module.scss";

// context provider
import { useTheme } from "@/context/ThemeProvider";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={`${styles.main} ${styles[theme]}`}>{children}</main>
    </div>
  );
}
