// styles
import styles from "./ContactForm.module.scss";

// react
import { Dispatch, SetStateAction, useState } from "react";

// context
import { useTheme } from "@/context/ThemeProvider";

// react spinners
import PulseLoader from "react-spinners/PulseLoader";

type props = {
  isSent: boolean;
  setIsSent: Dispatch<SetStateAction<boolean>>;
};

const initFormData = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  message: "",
  isLoading: false,
};

export default function ContactForm({ isSent, setIsSent }: props) {
  // initial state
  const { theme } = useTheme();
  const [formData, setFormData] = useState(initFormData);

  // destructure form data
  const { firstName, lastName, emailAddress, message, isLoading } = formData;

  // update input values
  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit contact form
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      isLoading: true,
    }));

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
    } else {
      setFormData((prev) => ({
        ...prev,
        firstName: "",
        lastName: "",
        emailAddress: "",
        message: "",
        isLoading: false,
      }));
      setIsSent(true);
    }
    console.log(firstName, lastName, emailAddress, message);
  };

  return (
    <form className={`${styles.form} ${styles[theme]}`} onSubmit={handleSubmit} method="POST">
      <div>
        <label className={`${styles.label} ${styles[theme]}`} htmlFor="firstName">
          First name
        </label>
        <input
          className={`${styles.input} ${styles[theme]}`}
          id="firstName"
          type="text"
          name="firstName"
          required
          value={firstName}
          onChange={handleChange}
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
          name="lastName"
          required
          value={lastName}
          onChange={handleChange}
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
          name="emailAddress"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={emailAddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={`${styles.label}${styles[theme]}`} htmlFor="message">
          Message
        </label>
        <textarea
          className={`${styles.message} ${styles[theme]}`}
          id="message"
          name="message"
          required
          minLength={10}
          value={message}
          onChange={handleChange}
        />
      </div>
      <button className={`${styles.button} ${styles[theme]}`} type="submit">
        {isLoading ? <PulseLoader color="hsl(250, 15%, 10%)" size={8} /> : "Submit"}
      </button>
    </form>
  );
}
