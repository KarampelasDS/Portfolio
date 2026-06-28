import Image from "next/image";
import styles from "./ExperienceItem.module.css";

type ExperienceItemProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  startDate: string;
  endDate?: string;
  variant?: "work" | "education";
};

export default function ExperienceItem({
  image,
  title,
  subtitle,
  description,
  startDate,
  endDate,
  variant = "work",
}: ExperienceItemProps) {
  return (
    <div
      className={`${styles.experienceItemContainer} ${
        variant === "work" ? styles.work : styles.education
      }`}
    >
      <div className={styles.experienceItemHeader}>
        <div className={styles.experienceItemImage}>
          <Image
            key={title}
            loading="lazy"
            alt={title}
            src={image}
            width={50}
            height={50}
          />
        </div>
        <div className={styles.experienceItemMain}>
          <div className={styles.experienceItemInfo}>
            <div className={styles.experienceItemTitles}>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
            </div>
            <div className={styles.experienceItemDate}>
              <span>{startDate}</span>
              {endDate && <span> - {endDate}</span>}
            </div>
          </div>
          <div className={styles.experienceItemDescription}>{description}</div>
        </div>
      </div>
    </div>
  );
}
