"use client";

import styles from "./Header.module.css";
import { useState, useRef, useEffect } from "react";
import { useThemeContext } from "@/components/ThemeProvider/ThemeProvider";
import { MdLightMode, MdDarkMode } from "react-icons/md";

type PillStyle = {
  width: number;
  left: number;
};

export default function Header() {
  const { theme, toggleTheme } = useThemeContext();
  const items = [
    { label: "Home", destination: "#home" },
    { label: "Stack", destination: "#stack" },
    { label: "Experience", destination: "#experience" },
    { label: "Projects", destination: "#projects" },
  ];
  const [selected, setSelected] = useState("Home");
  const [pillStyle, setPillStyle] = useState<PillStyle>({ width: 0, left: 0 });
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isClickScrolling = useRef(false);

  const handleClick = (item: string, index: number) => {
    setSelected(item);
    const btn = itemRefs.current[index];
    if (btn) setPillStyle({ width: btn.offsetWidth, left: btn.offsetLeft });

    let targetY = 0;
    if (item !== "Home") {
      const target = items.find((i) => i.label === item);
      if (!target) return;
      const el = document.querySelector(target.destination);
      if (!el) return;
      targetY = el.getBoundingClientRect().top + window.scrollY;
    }

    if (Math.abs(targetY - window.scrollY) > 2) {
      isClickScrolling.current = true;
      window.scrollTo({ top: targetY, behavior: "smooth" });
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

  useEffect(() => {
    const sections = items
      .map((item) => ({
        label: item.label,
        el: document.querySelector(item.destination),
      }))
      .filter((s): s is { label: string; el: Element } => s.el !== null);

    if (sections.length === 0) return;

    const pickActive = () => {
      if (isClickScrolling.current) return;

      const line = window.innerHeight * 0.2;
      let current = sections[0].label;
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= line) current = s.label;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = sections[sections.length - 1].label;

      setSelected((prev) => (prev === current ? prev : current));
    };

    const observer = new IntersectionObserver(pickActive, {
      rootMargin: "0px 0px -80% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    sections.forEach((s) => observer.observe(s.el));

    const releaseOnUserInput = () => {
      isClickScrolling.current = false;
    };
    window.addEventListener("wheel", releaseOnUserInput, { passive: true });
    window.addEventListener("touchstart", releaseOnUserInput, {
      passive: true,
    });
    window.addEventListener("keydown", releaseOnUserInput);

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", releaseOnUserInput);
      window.removeEventListener("touchstart", releaseOnUserInput);
      window.removeEventListener("keydown", releaseOnUserInput);
    };
  }, []);

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
        <button
          className={styles.headerItem}
          onClick={() => toggleTheme()}
          aria-label="Toggle theme"
        >
          <MdDarkMode size={20} className={styles.iconDark} />
          <MdLightMode size={20} className={styles.iconLight} />
        </button>
      </div>
    </nav>
  );
}
