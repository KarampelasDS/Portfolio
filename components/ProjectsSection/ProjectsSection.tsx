import ProjectItem from "./ProjectItem/ProjectItem";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const items = [
    {
      title: "Dishmeister",
      description:
        "A social-first recipe platform where food lovers share, discover and save recipes.",
      url: "/project/dishmeister",
      image: "/ProjectHeroImages/DishmeisterImageHero.png",
      stack: ["React 19", "TypeScript", "Vite", "Supabase", "PWA"],
      liveLink: "https://www.dishmeister.com",
      sourceLink: "https://github.com/KarampelasDS/Dishmeister",
    },
    {
      title: "LystMate",
      description:
        "Create, share and manage lists with friends and family.Manage your groceries,wishlist etc. in sync!",
      url: "/project/lystmate",
      image: "/ProjectHeroImages/LystMateImageHero.png",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Express 5",
        "Prisma",
        "PostgreSQL",
        "PWA",
      ],
      liveLink: "https://www.lystmate.app",
      sourceLink: "https://github.com/KarampelasDS/LystMate",
    },
    {
      title: "TuneSaver",
      description:
        "Match your Spotify playlists to Beat Saber custom maps and download them automatically.",
      url: "/project/tunesaver",
      image: "/ProjectHeroImages/TuneSaverImageHero.png",
      stack: [
        "Electron",
        "React",
        "Typescript",
        "Spotify API",
        "BeatSaver API",
      ],
      liveLink: "https://tunesaver.vercel.app/",
      sourceLink: "https://github.com/KarampelasDS/TuneSaver",
    },
    {
      title: "WalletLogger",
      description:
        "An Offline, Privacy-First Android app to track multi-currency accounts, income, and expenses.",
      url: "/project/walletlogger",
      image: "/ProjectHeroImages/WalletLoggerImageHero.jpg",
      stack: ["React Native", "Expo", "SQLite", "Android"],
      liveLink: "https://github.com/KarampelasDS/WalletLogger/releases/latest",
      sourceLink: "https://github.com/KarampelasDS/WalletLogger",
      ctaText: "Download",
    },
  ];
  return (
    <div id="projects" className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>Selected Projects</h2>
      <div className={styles.projectsGrid}>
        {items.map((item) => (
          <ProjectItem
            key={item.title}
            title={item.title}
            description={item.description}
            url={item.url}
            image={item.image}
            stack={item.stack}
            liveLink={item.liveLink}
            sourceLink={item.sourceLink}
            ctaText={item.ctaText}
          />
        ))}
      </div>
    </div>
  );
}
