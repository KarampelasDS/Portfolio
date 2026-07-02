import Header from "@/components/Header/Header";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import Footer from "@/components/Footer/Footer";

export default function Project() {
  return (
    <>
      <Header />
      <ProjectPage
        title="Dishmeister"
        description="A social recipe platform built around food discovery, sharing, and community."
        live={true}
        liveUrl="https://www.dishmeister.com"
        sourceUrl="https://github.com/KarampelasDS/Dishmeister"
        images={[
          "/ProjectCarouselImages/Dishmeister/DishmeisterCarousel1.png",
          "/ProjectCarouselImages/Dishmeister/DishmeisterCarousel2.png",
          "/ProjectCarouselImages/Dishmeister/DishmeisterCarousel3.png",
          "/ProjectCarouselImages/Dishmeister/DishmeisterCarousel4.png",
          "/ProjectCarouselImages/Dishmeister/DishmeisterCarousel5.png",
        ]}
        overview="Dishmeister is a full-stack social platform where food lovers share recipes, follow chefs they trust, and get served a feed that actually learns their taste. Under the hood, a custom algorithmic engine built in Postgres weights every interaction to deliver an 80/20 split between personalised content and fresh discoveries. Built entirely solo, from database architecture to deployment, with production-grade infrastructure: image pipelines, real-time notifications, GDPR compliance, and a full PWA install experience."
        role="Full-stack + infrastructure"
        type="Social platform · Web / PWA"
        stack={["React 19", "TypeScript", "Vite", "Supabase", "PWA"]}
        highlights={[
          "Personalised algorithmic feed powered by Postgres scoring functions",
          "Real-time notifications on saves and comments",
          "Full recipe publishing flow with image compression and WebP conversion",
          "Full-text search across the entire platform",
          "Blocking system, rate limiting, and GDPR-compliant user deletion",
          "Installable PWA that behaves like a native app",
        ]}
        nextProjectUrl="/project/lystmate"
        previousProjectUrl="/project/walletlogger"
        nextProject="LystMate"
        previousProject="WalletLogger"
      />
      <Footer />
    </>
  );
}
