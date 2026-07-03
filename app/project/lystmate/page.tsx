import Header from "@/components/Header/Header";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import Footer from "@/components/Footer/Footer";

export default function Project() {
  return (
    <>
      <Header />
      <ProjectPage
        title="LystMate"
        description=" Collaborative lists you actually share - groceries, travel, tasks, anything."
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
        overview="LystMate is a full-stack PWA for creating and sharing lists with people you trust. It features a custom-built Express backend with JWT authentication and refresh token rotation, role-based access control across three permission levels, and an invite system for bringing collaborators on board. The frontend uses optimistic UI updates with polling sync to keep shared lists feeling responsive without requiring WebSockets. Built and deployed end to end, with the backend running on Railway and the frontend on Vercel."
        type="Productivity app · Web / PWA"
        stack={["Next.js", "TypeScript", "Express", "Node", "PWA"]}
        highlights={[
          "Custom Express backend with JWT and refresh token rotation",
          "Role-based access control with Owner, Member, and Viewer permissions",
          "Invite system for adding collaborators to shared lists",
          "Optimistic UI updates with polling-based sync",
          "List themes, visibility controls, and ownership transfer",
          "Installable PWA with offline-capable architecture",
        ]}
        role="Full-stack + API design"
        nextProjectUrl="/project/tunesaver"
        previousProjectUrl="/project/dishmeister"
        nextProject="TuneSaver"
        previousProject="Dishmeister"
      />
      <Footer />
    </>
  );
}
