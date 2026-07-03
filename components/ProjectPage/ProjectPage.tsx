import styles from "./ProjectPage.module.css";
import { FiExternalLink, FiCheck } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import Button from "@/components/Button/Button";
import Carousel from "../Carousel/Carousel";

type ProjectPageProps = {
  title: string;
  description: string;
  live?: boolean;
  liveUrl: string;
  sourceUrl: string;
  images: string[];
  overview: string;
  role: string;
  type: string;
  stack: string[];
  highlights: string[];
  nextProject: string;
  previousProject: string;
  nextProjectUrl: string;
  previousProjectUrl: string;
  imagesZoom: boolean;
};

export default function ProjectPage({
  title,
  description,
  live,
  liveUrl,
  sourceUrl,
  images,
  overview,
  role,
  type,
  stack,
  highlights,
  nextProject,
  previousProject,
  previousProjectUrl,
  nextProjectUrl,
  imagesZoom,
}: ProjectPageProps) {
  return (
    <div className={styles.projectPage}>
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "1rem",
          width: "fit-content",
        }}
      >
        <FaArrowLeft /> Home
      </a>
      <div className={styles.projectPageHeader}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.projectPageLinks}>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button
              backgroundColor="var(--accent)"
              textColor="#fff"
              hoverBackgroundColor="var(--accent-hover)"
              fontSize="0.9rem"
            >
              <FiExternalLink /> {live ? "Visit Site" : "Download"}
            </Button>
          </a>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button
              border="1px solid var(--border)"
              hoverBackgroundColor="var(--headerBackground)"
              fontSize="0.9rem"
            >
              <SiGithub />
              Code
            </Button>
          </a>
        </div>
      </div>
      <div className={styles.projectPageCarousel}>
        <Carousel images={images} zoomed={imagesZoom} />
      </div>
      <div className={styles.projectPageContent}>
        <div className={styles.projectPageDetails}>
          <div className={styles.projectPageOverview}>
            <h2>OVERVIEW</h2>
            <p>{overview}</p>
          </div>
          <div className={styles.projectPageHighlights}>
            <h2>HIGHLIGHTS</h2>
            <ul>
              {highlights.map((highlight, index) => (
                <li key={index}>
                  <span className={styles.highlightIcon}>
                    <FiCheck />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.projectPageSidebar}>
          <div className={styles.sidebarContent}>
            <div className={styles.sidebarItem}>
              <h3>ROLE</h3>
              <span>{role}</span>
            </div>
            <div className={styles.sidebarItem}>
              <h3>TYPE</h3>
              <span>{type}</span>
            </div>
            <div className={styles.sidebarItem}>
              <h3>STACK</h3>
              <div className={styles.stackList}>
                {stack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectPageNavigation}>
        <a href={previousProjectUrl} className={styles.previousProject}>
          <span>
            <FaArrowLeft />
            Previous
          </span>
          <span>{previousProject}</span>
        </a>
        <a href={nextProjectUrl} className={styles.nextProject}>
          <span>
            Next <FaArrowRight />
          </span>
          <span>{nextProject}</span>
        </a>
      </div>
    </div>
  );
}
