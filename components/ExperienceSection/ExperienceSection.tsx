"use client";

import styles from "./ExperienceSection.module.css";
import { useState } from "react";

export default function ExperienceSection() {
  const [tab, setTab] = useState<string>("Work");
  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.experienceTitle}>Experience</h2>
      <div className={styles.experienceToggle}>
        <button className={styles.experienceToggleButton}>Work</button>
        <button className={styles.experienceToggleButton}>Education</button>
      </div>
      {tab == "Work" && <div className={styles.experienceWork}></div>}
      {tab == "Education" && <div className={styles.experienceEducation}></div>}
    </div>
  );
}
