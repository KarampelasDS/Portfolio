import SocialLink from "../SocialLink/SocialLink";
import styles from "./Footer.module.css";
import { FaLinkedin, FaMugSaucer } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { MdMailOutline } from "react-icons/md";
import { TbMug } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerImage}>
            <svg
              className={styles.steam}
              viewBox="0 0 24 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                className={styles.steam1}
                d="M7 20c-2-3.2 2-5.2 0-8.4s2-5.2 0-8.4"
              />
              <path
                className={styles.steam2}
                d="M10 20c2-3.2-2-5.2 0-8.4s-2-5.2 0-8.4"
              />
              <path
                className={styles.steam3}
                d="M15 20c-2-3.2 2-5.2 0-8.4s2-5.2 0-8.4"
              />
            </svg>
            <TbMug className={styles.mug} />
          </div>

          <div className={styles.footerText}>
            <div className={styles.footerName}>Dimitris Karampelas</div>
            <div className={styles.footerSubtext}>
              Full-stack Engineer · Next.js · React · TypeScript · Node.js
            </div>
          </div>
        </div>
        <div className={styles.footerLinks}>
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
          <SocialLink href="mailto:karampelas.ds@gmail.com">
            <MdMailOutline style={{ fontSize: "1.2rem" }} />
            Email
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
