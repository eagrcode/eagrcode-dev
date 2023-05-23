// styles
import styles from "./Contact.module.scss";

// next
import Link from "next/link";

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
        <p className={theme}>
          I'm currently open for work, if you wish to get in touch please use the form below.
        </p>
        <p className={theme}>
          Alternatively, you can contact me direct via{" "}
          <Link
            className={`${styles.emailLink} ${styles[theme]}`}
            href="mailto:elliot.robinson92@hotmail.com"
            title="Open email app"
          >
            elliot.robinson92@hotmail.com
          </Link>
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
