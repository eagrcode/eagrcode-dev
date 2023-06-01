// styles
import styles from "./Contact.module.scss";

// next
import Link from "next/link";

// components
import ContactForm from "./ContactForm/ContactForm";

// context
import { useTheme } from "@/context/ThemeProvider";
import { useContextProvider } from "@/context/ContextProvider";

// components
import IconContainer from "../IconContainer/IconContainer";

export default function Contact() {
  // initial state
  const { theme } = useTheme();
  const { isOpen } = useContextProvider();

  return (
    <section className={styles.contactSection}>
      <div className={isOpen ? `${styles.contactWrapper} ${styles.isOpen}` : styles.contactWrapper}>
        <h2 id="scroll-to-contact" className={theme}>
          Contact Me
        </h2>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
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
            <IconContainer />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
