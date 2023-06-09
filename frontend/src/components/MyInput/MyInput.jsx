import styles from "./MyInput.module.css";
import { forwardRef } from "react";

const MyInput = forwardRef(({ type, label, placeholder }, ref) => {
  return (
    <div className={styles.control}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        ref={ref}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
});

export default MyInput;
