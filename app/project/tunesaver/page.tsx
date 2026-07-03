import Header from "@/components/Header/Header";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import Footer from "@/components/Footer/Footer";

export default function Project() {
  return (
    <>
      <Header />
      <ProjectPage
        title="TuneSaver"
        description="A desktop app that matches your Spotify playlists to Beat Saber custom maps and downloads them automatically."
        live={true}
        liveUrl="https://tunesaver.vercel.app"
        sourceUrl="https://github.com/KarampelasDS/tunesaver"
        images={[
          "/ProjectCarouselImages/TuneSaver/TuneSaverCarousel1.png",
          "/ProjectCarouselImages/TuneSaver/TuneSaverCarousel2.png",
          "/ProjectCarouselImages/TuneSaver/TuneSaverCarousel3.png",
          "/ProjectCarouselImages/TuneSaver/TuneSaverCarousel4.png",
        ]}
        overview="TuneSaver bridges two worlds that have no official connection. It authenticates with Spotify via PKCE OAuth, reads your playlists, queries the BeatSaver API to find matching custom maps, and lets you download them directly to your Beat Saber library. Built as an Electron app with a clean IPC architecture separating main and renderer processes, handling protocol registration for OAuth callbacks and environment switching between development and packaged builds."
        type="Desktop application · Windows "
        stack={["Next.js", "TypeScript", "Express", "Node", "PWA"]}
        highlights={[
          "Spotify PKCE OAuth flow with protocol-based callback handling",
          "BeatSaver API integration with playlist-to-map matching",
          "Electron IPC architecture with contextBridge for process isolation",
          "Packaged build support with environment-aware config loading",
        ]}
        role=" Desktop app + OAuth integration + Landing Page"
        nextProjectUrl="/project/walletlogger"
        previousProjectUrl="/project/lystmate"
        nextProject="WalletLogger"
        previousProject="LystMate"
      />
      <Footer />
    </>
  );
}
