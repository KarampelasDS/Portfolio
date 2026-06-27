"use client";

import styles from "./ExperienceSection.module.css";
import { useState } from "react";

type PillStyle = {
  left: string;
};

export default function ExperienceSection() {
  const [tab, setTab] = useState<string>();
  const [pillStyle, setPillStyle] = useState<PillStyle>({ left: "0%" });

  const handleClick = (tab: string) => {
    setTab(tab);
    tab == "Work" ? setPillStyle({ left: "0" }) : setPillStyle({ left: "50%" });
  };
  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.experienceTitle}>Experience</h2>
      <div className={styles.experienceToggle}>
        <div className={styles.experienceToggleButtons}>
          <div className={styles.pill} style={pillStyle}></div>
          <button
            className={styles.experienceToggleButton}
            onClick={() => handleClick("Work")}
          >
            Work
          </button>
          <button
            className={styles.experienceToggleButton}
            onClick={() => handleClick("Experience")}
          >
            Education
          </button>
        </div>
      </div>
      {tab == "Work" && <div className={styles.experienceWork}></div>}
      {tab == "Education" && <div className={styles.experienceEducation}></div>}
    </div>
  );
}
