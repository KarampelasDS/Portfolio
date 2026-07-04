import Header from "@/components/Header/Header";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import Footer from "@/components/Footer/Footer";

export default function Project() {
  return (
    <>
      <Header />
      <ProjectPage
        title="TuneSaver"
        description="A desktop app that turns your Spotify playlists into playable Beat Saber libraries, matched, scored, and downloaded automatically."
        live={true}
        liveUrl="https://tunesaver.vercel.app"
        sourceUrl="https://github.com/KarampelasDS/tunesaver"
        images={[
          "/ProjectCarouselImages/TuneSaver/TuneSaverCarouselHero.png",
          "/ProjectCarouselImages/TuneSaver/TuneSaverCarousel1.png",
          "/ProjectCarouselImages/TuneSaver/TuneSaverCarousel2.png",
          "/ProjectCarouselImages/TuneSaver/TuneSaverCarousel3.png",
          "/ProjectCarouselImages/TuneSaver/TuneSaverCarousel4.png",
        ]}
        overview="I play Beat Saber and I use Spotify. There was no good way to connect one into the other, so I built it. TuneSaver is an Electron desktop app that authenticates with Spotify through a secretless PKCE OAuth flow, reads your playlists, and searches the BeatSaver community catalogue for the custom map that best matches every track. A custom weighted similarity engine scores title and artist together with title cleaning, repeated-letter collapsing, and a Levenshtein distance fallback to pick the strongest candidate. It then batch-downloads and extracts each map straight into Beat Saber's CustomLevels folder. For full playlists it writes a native .bplist file so your collection appears in-game complete with its original Spotify cover art. A clean IPC architecture keeps the main and renderer processes isolated via a context bridge, with protocol registration for OAuth callbacks and environment-aware config across dev and packaged builds."
        type="Desktop application · Windows / macOS"
        stack={["Electron", "React 19", "TypeScript", "Vite", "Spotify API"]}
        highlights={[
          "Secretless Spotify PKCE OAuth with protocol-based callback handling",
          "Weighted title-and-artist matching engine over the BeatSaver catalogue",
          "Title normalisation, repeated-letter collapsing, and Levenshtein scoring fallback",
          "Concurrent map downloads with live per-map progress and ZIP extraction",
          "Automatic .bplist playlist generation with embedded Spotify cover art",
          "Rate-limited batch search that respects the BeatSaver API",
        ]}
        role="Desktop app + OAuth integration"
        nextProjectUrl="/projects/walletlogger"
        previousProjectUrl="/projects/lystmate"
        nextProject="WalletLogger"
        previousProject="LystMate"
      />
      <Footer />
    </>
  );
}
