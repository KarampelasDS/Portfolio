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
      title: "TELEKOM (formerly COSMOTE)",
      subtitle: "Full-Stack Engineer",
      description:
        "<p>Worked across both the frontend and backend teams on one of Greece&#39;s highest-traffic platforms (telekom.gr, formerly cosmote.gr), serving millions of users annually.</p><br/><ul style='list-style:disc'><li>Delivered two complete site rebrands in close succession (COSMOTE to COSMOTE TELEKOM, then COSMOTE TELEKOM to TELEKOM), personally owning migration of 1,200+ pages across English and Greek each time to a new design system, including architectural code changes.</li><li>Partnered with the design and legal teams to finalize the design system, visual identities, and new names for close to 600 products.</li><li>Introduced React to the legacy platform via an islands architecture during the second rebrand, its first React footprint and now the foundation for its interactive components.</li><li>Built and owned the header, footer and minicart (including combo and couponing logic) rendered on every user journey, with the header on a CMS-driven architecture so other teams manage its content independently.</li><li>Shipped both rebrands on their fixed launch dates with near-zero downtime, cutting over at midnight to minimize user impact.</li><li>Ran A/B tests across 4 checkout flows and 2 SPAs to inform product and conversion decisions.</li><li>Took the platform from no accessibility support to WCAG compliance, reaching 90%+ Lighthouse scores across all pages, verified by an external audit.</li></ul>",
      startDate: "Jan 2024",
      endDate: "Sep 2026",
      image: "/Telekom.png",
    },
    {
      title: "TELEKOM (formerly COSMOTE)",
      subtitle: "Frontend Engineer Intern",
      description:
        "<p>Contributed to live production features from day one within a large legacy codebase on one of Greece&#39;s highest-traffic platforms.</p> <br/> <ul style='list-style:disc'><li>Worked across HTML, CSS, JavaScript and CMS-driven pages.</li><li>Built 6+ reusable CMS HTML templates used across all product pages spanning multiple categories.</li><li>Contributed to SEO optimisation across product pages, improving discoverability by updating existing pages and removing outdated pages that were hijacking search results.</li></ul>",
      startDate: "Jun 2023",
      endDate: "Dec 2023",
      image: "/Telekom.png",
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
