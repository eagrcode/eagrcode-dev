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
        <input className={styles.input} id="firstName" type="text" name="First name" />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input className={styles.input} id="lastName" type="text" name="Last name" />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input className={styles.input} id="email" type="email" name="Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea className={styles.message} id="message" name="Message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button className={styles.button} type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
