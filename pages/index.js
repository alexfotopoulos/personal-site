import Hero from "../components/homepage/Hero";
import FeaturedProjectsGrid from "../components/homepage/FeaturedProjectsGrid";
import { getAllProjects } from "../helpers";

export default function Home(props) {
  return (
    <main>
      <Hero />
      <section className="homepageFeaturedProjects">
        <h2 className={"heading-secondary u-margin-bottom-small"}>Featured Projects</h2>
        <FeaturedProjectsGrid projects={props.projects} />
      </section>
    </main>
  );
};

export async function getStaticProps() {
  //retrieve all projects
  const projects = getAllProjects().map(project => project.meta);
  //filter project by isFeatured
  const featuredProjects = projects.filter(project => project.isFeatured === true);

  return {
    props: {
      projects: featuredProjects
    },
    revalidate: 60
  };
};