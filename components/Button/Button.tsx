"use client";
import { CSSProperties, ReactNode, useId } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  border?: string;
  hoverBackgroundColor?: string;
  fontSize?: string;
  onClickFunction?: () => void;
};

export default function Button({
  backgroundColor,
  textColor,
  border,
  hoverBackgroundColor,
  fontSize,
  children,
  onClickFunction,
}: ButtonProps) {
  return (
    <>
      <button
        onClick={onClickFunction}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = hoverBackgroundColor ?? "")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = backgroundColor ?? "")
        }
        className={styles.buttonContainer}
        style={
          {
            backgroundColor: backgroundColor,
            color: textColor,
            border: border,
            fontSize: fontSize,
            "--hover-bg": hoverBackgroundColor,
          } as CSSProperties
        }
      >
        {children}
      </button>
    </>
  );
}
