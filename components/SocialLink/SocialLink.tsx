import { ReactNode } from "react";
import styles from "./SocialLink.module.css";

type SocialLinkProps = {
  children: ReactNode;
  href: string;
  target?: string;
};

export default function SocialLink({
  children,
  href,
  target,
}: SocialLinkProps) {
  return (
    <a
      className={styles.socialLinkContainer}
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
