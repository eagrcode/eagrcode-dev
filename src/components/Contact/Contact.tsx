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
    <section className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        <h2 id="scroll-to-contact" className={theme}>
          Contact Me
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
