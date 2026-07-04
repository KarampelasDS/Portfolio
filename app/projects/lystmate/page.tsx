import Header from "@/components/Header/Header";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import Footer from "@/components/Footer/Footer";

export default function Project() {
  return (
    <>
      <Header />
      <ProjectPage
        title="LystMate"
        description="Create, share, and manage lists with the people you trust: groceries, travel, tasks, anything."
        live={true}
        liveUrl="https://www.lystmate.app"
        sourceUrl="https://github.com/KarampelasDS/LystMate"
        images={[
          "/ProjectCarouselImages/LystMate/LystMateCarouselHero.png",
          "/ProjectCarouselImages/LystMate/LystMateCarousel1.png",
          "/ProjectCarouselImages/LystMate/LystMateCarousel2.png",
          "/ProjectCarouselImages/LystMate/LystMateCarousel3.png",
          "/ProjectCarouselImages/LystMate/LystMateCarousel4.png",
          "/ProjectCarouselImages/LystMate/LystMateCarousel5.png",
          "/ProjectCarouselImages/LystMate/LystMateCarousel6.png",
        ]}
        overview="LystMate is a collaborative list-keeping app and installable PWA built for sharing. A custom Express 5 and Prisma backend on PostgreSQL powers three permission tiers: owners control the list and its members, members contribute and edit, viewers just read. The invite system brings in collaborators by email, including people who don't have an account yet; their invite links activate automatically the moment they verify. Ownership can be transferred between members, which sounds like a small detail until you've used a shared app where the original creator left and took access with them. Authentication runs end to end with JWT access tokens, httpOnly refresh cookies, email verification, forgot and reset flows, and rate limiting. Transactional email goes through Resend. The Next.js 16 App Router frontend on Vercel talks to the API on Railway, dresses each list in one of eight cascading colour themes, and feels native on mobile with a bottom dock, smooth page transitions, and skeleton loading states."
        type="Collaborative productivity app · Web / PWA"
        stack={[
          "Next.js 16",
          "TypeScript",
          "Express 5",
          "PostgreSQL",
          "Prisma",
        ]}
        highlights={[
          "Custom Express 5 and Prisma API with JWT access and httpOnly refresh cookies",
          "Three-tier role system: owner controls membership, members contribute, viewers read",
          "Email invite system that activates automatically once the recipient verifies",
          "Ownership transfer so lists survive changes in who manages them",
          "Eight cascading colour themes applied across every list surface",
          "Installable PWA with per-page SEO, sitemap, and offline service worker",
        ]}
        role="Full-stack + API design"
        nextProjectUrl="/projects/tunesaver"
        previousProjectUrl="/projects/dishmeister"
        nextProject="TuneSaver"
        previousProject="Dishmeister"
      />
      <Footer />
    </>
  );
}
