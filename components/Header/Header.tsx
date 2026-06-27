"use client";

import styles from "./Header.module.css";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { MdLightMode, MdDarkMode } from "react-icons/md";

type PillStyle = {
  width: number;
  left: number;
};

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const items = [
    { label: "Home", destination: "#hero" },
    { label: "Stack", destination: "#hero" },
    { label: "Experience", destination: "#experience" },
    { label: "Projects", destination: "#projects" },
  ];
  const [selected, setSelected] = useState("Home");
  const [pillStyle, setPillStyle] = useState<PillStyle>({ width: 0, left: 0 });
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (item: string, index: number) => {
    setSelected(item);
    const el = itemRefs.current[index];
    if (el) {
      setPillStyle({
        width: el.offsetWidth,
        left: el.offsetLeft,
      });
    }
  };

  useEffect(() => {
    const el = itemRefs.current[0];
    if (el) setPillStyle({ width: el.offsetWidth, left: el.offsetLeft });
  }, []);

  const updatePill = () => {
    const selectedIndex = items.findIndex((item) => item.label === selected);
    const el = itemRefs.current[selectedIndex];

    if (el) {
      setPillStyle({
        width: el.offsetWidth,
        left: el.offsetLeft,
      });
    }
  };

  useEffect(() => {
    updatePill();

    window.addEventListener("resize", updatePill);

    return () => {
      window.removeEventListener("resize", updatePill);
    };
  }, [selected]);

  return (
    <nav className={styles.headerContainer}>
      <div className={styles.headerItems}>
        <div
          className={styles.pill}
          style={{ width: pillStyle.width, left: pillStyle.left }}
        />
        {items.map((item, index) => (
          <button
            data-label={item.label}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            key={item.label}
            className={`${styles.headerItem} ${selected == item.label && styles.headerItemSelected}`}
            onClick={() => handleClick(item.label, index)}
          >
            {item.label}
          </button>
        ))}
        <button className={styles.headerItem} onClick={() => toggleTheme()}>
          {theme === "dark" ? (
            <MdDarkMode size={20} />
          ) : (
            <MdLightMode size={20} />
          )}
        </button>
      </div>
    </nav>
  );
}
