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
      <label htmlFor="firstName">First name</label>
      <input id="firstName" type="text" name="firstName" />
      <label htmlFor="lastName">Last name</label>
      <input id="lastName" type="text" name="lastName" />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
