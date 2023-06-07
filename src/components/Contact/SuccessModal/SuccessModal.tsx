// styles
import { Dispatch, SetStateAction } from "react";
import styles from "./SuccessModal.module.scss";

// context
import { useTheme } from "@/context/ThemeProvider";

// icons
import { IoMdClose } from "react-icons/io";

// prop types
type props = {
  setIsSent: Dispatch<SetStateAction<boolean>>;
};

export default function SuccessModal({ setIsSent }: props) {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={`${styles.modal} ${styles[theme]}`} onClick={() => setIsSent(false)}>
      <div className={`${styles.modalInner} ${styles[theme]}`}>
        <h1 className={theme}>Message Sent!</h1>
        <p className={theme}>I will get back to you!</p>
        <button className={`${styles.button} ${styles[theme]}`} onClick={() => setIsSent(false)}>
          <IoMdClose size={30} />
        </button>
      </div>
    </div>
  );
}
