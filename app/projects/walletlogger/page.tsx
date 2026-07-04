import Header from "@/components/Header/Header";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import Footer from "@/components/Footer/Footer";

export default function Project() {
  return (
    <>
      <Header />
      <ProjectPage
        title="Wallet Logger"
        description="A private, offline-first, multi-currency expense manager for Android. No account, no cloud: your financial data never leaves your device."
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
        overview="Wallet Logger is an expense manager for Android built around one decision: your financial data belongs to you and nobody else. Every transaction lives in a local SQLite database and nothing is ever uploaded. No account, no analytics, no server. Log income, expenses, and transfers in any currency and the app converts to your main unit on the fly using a stored rate while preserving the original amount. The tricky part is currency migration: when you change your main currency, every stored rate, transaction, and account balance needs to update together or balances silently drift. Wallet Logger handles this inside a single atomic SQL transaction so the operation either completes fully or not at all. Snapshot-based records mean expenses stay readable even after you delete the account or category they belonged to. On top sits a statistics engine with month, year, and all-time views, a spending calendar, and donut, bar, and trend charts built from scratch with no charting libraries. Built with React Native on Expo's New Architecture and shipped as a standalone APK."
        stack={[
          "React Native",
          "Expo SDK 54",
          "Expo Router",
          "Zustand",
          "SQLite",
        ]}
        type="Multi-currency expense manager · Android"
        highlights={[
          "100% offline and private, all data stored locally in SQLite and never transmitted",
          "True multi-currency with on-the-fly conversion to a single main unit",
          "Atomic main-currency migration that re-scales every rate, entry, and balance",
          "Snapshot-based records that stay readable even after deleting accounts or categories",
          "Statistics engine with calendar plus donut, bar, and trend charts, no chart libraries",
          "Full backup, restore, and cross-app import, distributed as a standalone APK",
        ]}
        role="Mobile + offline architecture"
        nextProjectUrl="/projects/dishmeister"
        previousProjectUrl="/projects/tunesaver"
        nextProject="Dishmeister"
        previousProject="TuneSaver"
        imagesZoom={true}
      />
      <Footer />
    </>
  );
}
