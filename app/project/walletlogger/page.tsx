import Header from "@/components/Header/Header";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import Footer from "@/components/Footer/Footer";

export default function Project() {
  return (
    <>
      <Header />
      <ProjectPage
        title="Wallet Logger"
        description="A private, offline-first expense tracker for Android. No account, no cloud."
        live={false}
        liveUrl="https://github.com/KarampelasDS/WalletLogger/releases/latest"
        sourceUrl="https://github.com/KarampelasDS/WalletLogger"
        images={[
          "/ProjectCarouselImages/WalletLogger/WalletLoggerCarousel1.png",
          "/ProjectCarouselImages/WalletLogger/WalletLoggerCarousel2.png",
          "/ProjectCarouselImages/WalletLogger/WalletLoggerCarousel3.png",
          "/ProjectCarouselImages/WalletLogger/WalletLoggerCarousel4.png",
          "/ProjectCarouselImages/WalletLogger/WalletLoggerCarousel5.png",
          "/ProjectCarouselImages/WalletLogger/WalletLoggerCarousel6.png",
          "/ProjectCarouselImages/WalletLogger/WalletLoggerCarousel7.png",
        ]}
        overview="WalletLogger is a React Native expense tracker built for people who want full control over their financial data without handing it to a server. All data lives locally in SQLite, with atomic currency migration to keep records consistent when switching currencies. Expenses are visualised through hand-built charts with no charting library dependencies, and the app includes a full backup, import, and export system. Distributed as a standalone APK with no app store dependency."
        stack={["Next.js", "TypeScript", "Express", "Node", "PWA"]}
        type={"Expense tracker · Android"}
        highlights={[
          "Fully offline, all data stored locally in SQLite",
          "Hand-built charts with no third-party charting library",
          "Atomic currency migration preserving historical record integrity",
          "Full backup, import, and export system",
          "Distributed as a standalone APK on GitHub Releases",
        ]}
        role="Mobile + offline architecture"
        nextProjectUrl="/project/dishmeister"
        previousProjectUrl="/project/tunesaver"
        nextProject="Dishmeister"
        previousProject="TuneSaver"
        imagesZoom={true}
      />
      <Footer />
    </>
  );
}
