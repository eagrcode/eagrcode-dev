// styles
import styles from "./ContactForm.module.scss";

// formspree
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("myyaojra");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      action="https://formspree.io/f/myyaojra"
      method="POST"
    >
      <div>
        <label htmlFor="firstName">First name</label>
        <input className={styles.input} id="firstName" type="text" name="First name" required />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input className={styles.input} id="lastName" type="text" name="Last name" required />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="Email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea className={styles.message} id="message" name="Message" required minLength={10} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button className={styles.button} type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
