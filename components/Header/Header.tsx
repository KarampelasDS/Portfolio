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
      const release = () => {
        isClickScrolling.current = false;
      };
      window.addEventListener("scrollend", release, { once: true });
      window.setTimeout(release, 1000);
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

    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(
            entry.target,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        if (isClickScrolling.current) return;

        let best: Element | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, el) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = el;
          }
        });

        if (best) {
          const match = sections.find((s) => s.el === best);
          if (match) setSelected(match.label);
        }
      },
      { rootMargin: "0px 0px -80% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
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
