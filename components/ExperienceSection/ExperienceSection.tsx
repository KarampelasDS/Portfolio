"use client";

import styles from "./ExperienceSection.module.css";
import { useState } from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

type PillStyle = {
  left: string;
};

export default function ExperienceSection() {
  const [tab, setTab] = useState<string>("Work");
  const [pillStyle, setPillStyle] = useState<PillStyle>({ left: "0%" });

  const workItems = [
    {
      title: "COSMOTE TELEKOM",
      subtitle: "Full-Stack Engineer",
      description:
        "Worked across two teams simultaneously on one of Greece's highest-traffic platforms serving millions of users annually. Within the frontend team, continued driving the COSMOTE to COSMOTE TELEKOM rebrand, collaborating closely with design to bring over 600 pages to a new design system with updated visual identity, colour schemes, and responsive media. Additionally joined the fullstack team, taking ownership of 2 platform-wide React components including the site header and minicart, rendered on every user journey, with the header built on a CMS-driven architecture so other teams manage its content independently. Took the platform from no accessibility support to WCAG compliance, reaching 90%+ Lighthouse scores across all pages, verified by an external audit.",
      startDate: "Apr 2025",
      endDate: "Present",
      image: "/CosmoteTelekom.png",
    },
    {
      title: "COSMOTE TELEKOM",
      subtitle: "Frontend Engineer Intern",
      description:
        "Contributed to live production features from day one, working across HTML, CSS, JavaScript and CMS-driven pages within a large legacy codebase. Built 6+ reusable CMS HTML templates used across all product pages. Contributed to SEO optimisation across product pages, improving discoverability by updating existing pages and removing outdated pages hijacking search results. Began work on the COSMOTE to COSMOTE TELEKOM rebrand, a migration of over 600 pages to a new design system, carrying that work through to the FTE role.",
      startDate: "Oct 2024",
      endDate: "Apr 2025",
      image: "/CosmoteTelekom.png",
    },
  ];

  const educationItems = [
    {
      title: "Meta Front-End Developer ",
      subtitle: "Meta · 9 courses",
      description:
        "React, advanced JavaScript, HTML and CSS in depth, version control, UX/UI principles, and coding interview preparation.",
      startDate: "Issued 2025",
      endDate: undefined,
      image: "/Meta.png",
    },
    {
      title: "Microsoft UX Design",
      subtitle: "Microsoft · 4 courses",
      description:
        "User research, information architecture, wireframing, prototyping, visual design, and accessibility considerations.",
      startDate: "Issued 2024",
      endDate: undefined,
      image: "/Microsoft.png",
    },
    {
      title: "WCAG Compliance: Web Accessibility Best Practices",
      subtitle: "Coursera",
      description:
        "Web accessibility standards, WCAG success criteria, and best practices for building inclusive, compliant web experiences.",
      startDate: "Issued 2025",
      image: "/Coursera.png",
    },
    {
      title: "SAEK DYPA Galatsi ",
      subtitle:
        "Computer Application Technician · Multimedia / Web Designer-Developer / Video Games",
      description:
        "Web development, programming fundamentals, multimedia applications, database design, and internet technologies.",
      startDate: "Graduated 2024",
      image: "/GraduationCapImage.png",
    },
  ];

  const handleClick = (tab: string) => {
    setTab(tab);
    tab == "Work" ? setPillStyle({ left: "0" }) : setPillStyle({ left: "50%" });
  };
  return (
    <div id="experience" className={styles.experienceContainer}>
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
            onClick={() => handleClick("Education")}
          >
            Education
          </button>
        </div>
      </div>
      {tab == "Work" && (
        <div className={styles.experienceWork}>
          {workItems.map((item) => (
            <ExperienceItem
              key={item.title + item.subtitle}
              title={item.title}
              subtitle={item.subtitle}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              image={item.image}
              variant="work"
            />
          ))}
        </div>
      )}
      {tab == "Education" && (
        <div className={styles.experienceEducation}>
          {educationItems.map((item) => (
            <ExperienceItem
              key={item.title + item.subtitle}
              title={item.title}
              subtitle={item.subtitle}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              image={item.image}
              variant="education"
            />
          ))}
        </div>
      )}
    </div>
  );
}
