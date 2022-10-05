import Hero from "../components/homepage/Hero";
import FeaturedProjectsGrid from "../components/homepage/FeaturedProjectsGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="homepageFeaturedProjects">
        <h2>Featured Projects</h2>
        <FeaturedProjectsGrid />
      </section>
    </main>
  );
};