// components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// styles
import styles from "./Layout.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";
import { useContextProvider } from "@/context/ContextProvider";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  // initial state
  const { theme } = useTheme();
  const { setIsOpen, isOpen } = useContextProvider();

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main
        onTouchStart={() => setIsOpen(false)}
        onClick={() => setIsOpen(false)}
        className={`${styles.main} ${styles[theme]}`}
      >
        {isOpen && <div className={styles.overlayBlur}></div>}
        {children}
      </main>
      <Footer />
    </div>
  );
}
