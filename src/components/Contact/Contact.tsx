// styles
import styles from "./Contact.module.scss";

// components
import ContactForm from "./ContactForm/ContactForm";

// context
import { useTheme } from "@/context/ThemeProvider";

export default function Contact() {
  // initial state
  const { theme } = useTheme();

  return (
    <section id="scroll-to-contact" className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        <h2 className={theme}>Contact Me</h2>
        <ContactForm />
      </div>
    </section>
  );
}
