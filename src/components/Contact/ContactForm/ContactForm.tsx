// styles
import styles from "./ContactForm.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";

// formspree
import { useForm, ValidationError } from "@formspree/react";

// react spinners
import PulseLoader from "react-spinners/PulseLoader";

export default function ContactForm() {
  // initial state
  const { theme } = useTheme();
  const [state, handleSubmit] = useForm("myyaojra");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form
      className={`${styles.form} ${styles[theme]}`}
      onSubmit={handleSubmit}
      action="https://formspree.io/f/myyaojra"
      method="POST"
    >
      <div>
        <label className={`${styles.label} ${styles[theme]}`} htmlFor="firstName">
          First name
        </label>
        <input
          className={`${styles.input} ${styles[theme]}`}
          id="firstName"
          type="text"
          name="First name"
          required
          disabled={state.submitting}
        />
      </div>
      <div>
        <label className={`${styles.label}${styles[theme]}`} htmlFor="lastName">
          Last name
        </label>
        <input
          className={`${styles.input} ${styles[theme]}`}
          id="lastName"
          type="text"
          name="Last name"
          required
          disabled={state.submitting}
        />
      </div>
      <div>
        <label className={`${styles.label}${styles[theme]}`} htmlFor="email">
          Email Address
        </label>
        <input
          className={`${styles.input} ${styles[theme]}`}
          id="email"
          type="email"
          name="Email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          disabled={state.submitting}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label className={`${styles.label}${styles[theme]}`} htmlFor="message">
          Message
        </label>
        <textarea
          className={`${styles.message} ${styles[theme]}`}
          id="message"
          name="Message"
          required
          minLength={10}
          disabled={state.submitting}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        className={`${styles.button} ${styles[theme]}`}
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? <PulseLoader color="hsl(250, 15%, 10%)" size={8} /> : "Submit"}
      </button>
    </form>
  );
}
