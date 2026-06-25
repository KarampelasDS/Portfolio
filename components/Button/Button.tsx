import { ReactElement } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactElement;
  backgroundColor?: string;
  textColor?: string;
  border?: string;
  hoverBackgroundColor?: string;
  fontSize?: string;
};

export default function Button({
  backgroundColor,
  textColor,
  border,
  hoverBackgroundColor,
  fontSize,
  children,
}: ButtonProps) {
  return (
    <button
      className={styles.buttonContainer}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        border: border,
        fontSize: fontSize,
      }}
    >
      {children}
    </button>
  );
}
