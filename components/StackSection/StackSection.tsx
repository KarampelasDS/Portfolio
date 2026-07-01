import styles from "./StackSection.module.css";

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiExpress,
} from "react-icons/si";

export default function StackSection() {
  const items = [
    { label: "React", image: <SiReact color="#61DAFB" /> },
    { label: "TypeScript", image: <SiTypescript color="#3178C6" /> },
    { label: "Next.js", image: <SiNextdotjs /> },
    { label: "Node.js", image: <SiNodedotjs color="#5A974B" /> },
    { label: "PostgreSQL", image: <SiPostgresql color="#3957B3" /> },
    { label: "Prisma", image: <SiPrisma /> },
    { label: "Supabase", image: <SiSupabase color="#3FCF8E" /> },
    { label: "Express", image: <SiExpress /> },
  ];

  return (
    <div id="stack" className={styles.stackContainer}>
      <h2 className={styles.stackTitle}>Core Stack</h2>
      <div className={styles.stackGrid}>
        {items.map((item) => (
          <div className={styles.stackItem} key={item.label}>
            {item.image}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
