// styles
import { Dispatch, SetStateAction } from "react";
import styles from "./SuccessModal.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";

type props = {
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
};

export default function SuccessModal({ setIsSuccess }: props) {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={`${styles.modal} ${styles[theme]}`}>
      <div className={`${styles.modalInner} ${styles[theme]}`}>
        <h1 className={theme}>Message Sent!</h1>
        <p className={theme}>I will get back to you!</p>
        <button onClick={() => setIsSuccess(false)}>X</button>
      </div>
    </div>
  );
}
