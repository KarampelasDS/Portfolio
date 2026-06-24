"use client";

import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const items = [
    { label: "Home", destination: "#hero" },
    { label: "Stack", destination: "#hero" },
    { label: "Experience", destination: "#experience" },
    { label: "Projects", destination: "#projects" },
  ];
  const [selected, setSelected] = useState("Home");
  return (
    <div className={styles.headerContainer}>
      {items.map((item) => (
        <span
          key={item.label}
          className={
            selected == item.label
              ? styles.headerItemSelected
              : styles.headerItem
          }
          onClick={() => setSelected(item.label)}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
