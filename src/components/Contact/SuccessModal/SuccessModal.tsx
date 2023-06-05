// styles
import { Dispatch, SetStateAction } from "react";
import styles from "./SuccessModal.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";

type props = {
  setIsSent: Dispatch<SetStateAction<boolean>>;
};

export default function SuccessModal({ setIsSent }: props) {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={`${styles.modal} ${styles[theme]}`}>
      <div className={`${styles.modalInner} ${styles[theme]}`}>
        <h1 className={theme}>Message Sent!</h1>
        <p className={theme}>I will get back to you!</p>
        <button onClick={() => setIsSent(false)}>X</button>
      </div>
    </div>
  );
}
