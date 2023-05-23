// components
import Navbar from "@/components/Navbar/Navbar";

// styles
import styles from "./Layout.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";

// image
import noise from "@/assets/images/noise.png";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={`${styles.main} ${styles[theme]}`}>{children}</main>
    </div>
  );
}
