import Hero from "../components/homepage/Hero";
import FeaturedProjectsGrid from "../components/homepage/FeaturedProjectsGrid";
import { getAllProjects } from "../helpers";

export default function Home(props) {
  return (
    <main>
      <Hero />
      <section className="homepageFeaturedProjects">
        <h2>Featured Projects</h2>
        <FeaturedProjectsGrid projects={props.projects} />
      </section>
    </main>
  );
};

export async function getStaticProps() {
  //retrieve all projects (yet to filter by isFeatured)
  const projects = getAllProjects().map(project => project.meta);

  return {
    props: { projects }
  };
};