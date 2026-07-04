"use client";
import Header from "@/components/Header/Header";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import Footer from "@/components/Footer/Footer";
import { useThemeContext } from "@/components/ThemeProvider/ThemeProvider";

export default function Project() {
  const { theme } = useThemeContext();
  return (
    <>
      <Header />
      <ProjectPage
        title="Dishmeister"
        description="A social-first recipe platform for discovering, cooking, saving, and sharing food."
        live={true}
        liveUrl="https://www.dishmeister.com"
        sourceUrl="https://github.com/KarampelasDS/Dishmeister"
        images={
          theme == "dark"
            ? [
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselHero.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselDark1.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselDark2.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselDark3.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselDark4.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselDark5.png",
              ]
            : [
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselHero.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselLight1.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselLight2.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselLight3.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselLight4.png",
                "/ProjectCarouselImages/Dishmeister/DishmeisterCarouselLight5.png",
              ]
        }
        overview="Dishmeister is a full-stack social platform where food lovers publish recipes, follow the chefs they trust, and get a feed that actually learns their taste. The core of the product is an algorithmic For You feed built on Supabase RPC: it weights every interaction to deliver an 80/20 split between personalised content and fresh discoveries, applies a scoring penalty to already-seen recipes rather than hard-excluding them, and falls back to global trending for new users with no interaction history yet. Infinite scroll and scroll restoration keep the experience seamless. Postgres triggers fire real-time notifications the instant someone follows, saves, comments, or replies. The recipe publishing flow handles image upload, editing, and compression with local draft persistence so nothing gets lost. Explore layers recipe and people search over category, difficulty, and country-of-origin filters. Built and deployed solo end to end, from database schema to production, as an installable PWA with full light and dark theming, GDPR-compliant user deletion, and a blocking and rate limiting system because a social platform without moderation is not a finished product."
        role="Full-stack + infrastructure"
        type="Social platform · Web / PWA"
        stack={["React 19", "TypeScript", "Vite", "Supabase", "PWA"]}
        highlights={[
          "Algorithmic For You feed with 80/20 personalisation and discovery split",
          "Seen-recipe scoring penalty instead of hard exclusion, trending fallback for new users",
          "Postgres trigger-driven notifications on follows, saves, comments, and replies",
          "Recipe publishing with image upload, editing, compression, and local draft persistence",
          "Blocking system, rate limiting, and GDPR-compliant user deletion",
          "Installable PWA with light and dark theming and Open Graph social previews",
        ]}
        nextProjectUrl="/projects/lystmate"
        previousProjectUrl="/projects/walletlogger"
        nextProject="LystMate"
        previousProject="WalletLogger"
      />
      <Footer />
    </>
  );
}
