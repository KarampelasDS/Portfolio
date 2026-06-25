import Button from "../Button/Button";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div>
        <div className={styles.heroTopTitle}>
          <span>Hi, I&apos;m Dimitris Karampelas</span>
          <span>👋</span>
        </div>
        <h1 className={styles.heroTitle}>
          I build web experiences
          <br />
          used by millions.
        </h1>
        <h2 className={styles.heroSubtitle}>
          Full-stack engineer with a frontend soul.
        </h2>
        <div className={styles.heroInfo}>📍 Athens, Greece</div>
        <div className={styles.heroButtons}>
          <Button
            backgroundColor="var(--accent)"
            textColor="var(--background)"
            fontSize="1rem"
          >
            Download CV
            <MdOutlineFileDownload size={20} />
          </Button>
          <Button
            border="solid 1px var(--text-muted)"
            textColor="var(--text-muted)"
            fontSize="1rem"
          >
            Experience
          </Button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          key={"test"}
          loading="eager"
          alt="Profile Images"
          src="/ProfilePicture.png"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
