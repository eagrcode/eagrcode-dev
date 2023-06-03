// styles
import styles from "./ContactForm.module.scss";

// react
import { RefObject, useRef, useState } from "react";

// context
import { useTheme } from "@/context/ThemeProvider";
import { FormEventHandler } from "react";

// react spinners
import PulseLoader from "react-spinners/PulseLoader";

type FormError = {
  email: string;
  message: string;
};

type Props = {
  state: {
    result: any;
    submitting: boolean;
    succeeded: boolean;
    errors: FormError[];
  };
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

// const msgDetails = {
//   firstName: "",
//   lastName: "",
//   emailAddress: "",
//   message: "",
// };

export default function ContactForm({ state }: Props) {
  // initial state
  const { theme } = useTheme();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  // const [formData, setFormData] = useState(msgDetails);

  // // element refs
  // const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  // // clear form data on successful submission
  // if (state.succeeded) {
  //   formRef.current?.reset();
  // }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        email: emailAddress,
        firstName: firstName,
        lastName: lastName,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(firstName, lastName, emailAddress, message);
  };

  return (
    <form
      // ref={formRef}
      className={`${styles.form} ${styles[theme]}`}
      onSubmit={handleSubmit}
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
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
