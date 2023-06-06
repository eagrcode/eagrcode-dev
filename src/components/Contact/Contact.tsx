// styles
import styles from "./Contact.module.scss";

// next
import Link from "next/link";

// react
import { useState } from "react";

// components
import ContactForm from "./ContactForm/ContactForm";
import IconContainer from "../IconContainer/IconContainer";
import SuccessModal from "./SuccessModal/SuccessModal";

// context
import { useTheme } from "@/context/ThemeProvider";
import { useContextProvider } from "@/context/ContextProvider";

export default function Contact() {
  // initial state
  const { theme } = useTheme();
  const { isOpen } = useContextProvider();
  const [isSent, setIsSent] = useState(false);

  return (
    <section className={styles.contactSection}>
      <div className={isOpen ? `${styles.contactWrapper} ${styles.isOpen}` : styles.contactWrapper}>
        <h2 id="scroll-to-contact" className={theme}>
          Contact Me
        </h2>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <p className={theme}>
              If you are an employer, recruiter or perhaps you simply wish to know more about me,
              then please get in touch using the form below.
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
          <ContactForm isSent={isSent} setIsSent={setIsSent} />
        </div>
      </div>
      {isSent && <SuccessModal setIsSent={setIsSent} />}
    </section>
  );
}
