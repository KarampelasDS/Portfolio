import Image from "next/image";
import styles from "./ProjectItem.module.css";
import Button from "@/components/Button/Button";
import { FiExternalLink } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

type ProjectItemProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  stack: string[];
  liveLink: string;
  sourceLink: string;
  ctaText?: string;
};

export default function ProjectItem({
  title,
  description,
  url,
  image,
  stack,
  liveLink,
  sourceLink,
  ctaText,
}: ProjectItemProps) {
  return (
    <div className={styles.projectItemContainer}>
      <Image
        alt={title}
        width={1488}
        height={930}
        src={image}
        sizes="(max-width: 768px) 100vw, 530px"
        quality={100}
        className={styles.projectItemImage}
      />
      <div className={styles.projectItemInfo}>
        <h3 className={styles.projectItemTitle}>{title}</h3>
        <h4 className={styles.projectItemDescription}>{description}</h4>
        <div className={styles.projectItemStack}>
          {stack.map((item) => (
            <div className={styles.ProjectItemStackItem} key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.projectItemActions}>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <Button
            backgroundColor="var(--accent)"
            textColor="#fff"
            hoverBackgroundColor="var(--accent-hover)"
            fontSize="0.9rem"
          >
            <FiExternalLink /> {ctaText ? ctaText : "Visit site"}
          </Button>
        </a>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          <Button
            border="1px solid var(--border)"
            hoverBackgroundColor="var(--headerBackground)"
            fontSize="0.9rem"
          >
            <SiGithub />
            Code
          </Button>
        </a>
        <div className={styles.projectItemActionsSpacer}>
          <Button
            border="1px solid var(--border)"
            hoverBackgroundColor="var(--headerBackground)"
            fontSize="0.9rem"
          >
            Details <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
