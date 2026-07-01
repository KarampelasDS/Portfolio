import Button from "../Button/Button";
import SocialLink from "../SocialLink/SocialLink";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div>
        <div className={styles.heroTopTitle}>
          <span>Hi, I&apos;m Dimitris Karampelas</span>
          <span className={styles.heroEmoji}>👋</span>
        </div>
        <h1 className={styles.heroTitle}>
          I build web experiences
          <br />
          used by millions.
        </h1>
        <h2 className={styles.heroSubtitle}>
          Full-stack engineer with a frontend soul.
        </h2>
        <div className={styles.heroInfo}>
          📍 Athens, Greece
          <SocialLink
            href="https://www.linkedin.com/in/dimitriskarampelas/"
            target="_blank"
          >
            <FaLinkedin />
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/KarampelasDS" target="_blank">
            <SiGithub />
            GitHub
          </SocialLink>
          <SocialLink href="mailto:24dimitris@gmail.com">
            <MdMailOutline style={{ fontSize: "1.2rem" }} />
            Email
          </SocialLink>
        </div>
        <div className={styles.heroButtons}>
          <Button
            backgroundColor="var(--accent)"
            textColor="var(--background)"
            fontSize="1rem"
            hoverBackgroundColor="var(--accent-hover)"
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
          key={"hero"}
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
