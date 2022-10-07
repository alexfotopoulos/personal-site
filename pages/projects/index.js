import ProjectPreview from "../../components/allProjectspage/ProjectPreview";
import { getAllProjects } from "../../helpers";

export default function AllProjects(props) {
    return (
        <div className="projectpageProjectsList">
            <h1>All Projects</h1>
            <div>
                {props.projects.map(project => (
                    <ProjectPreview project={project} key={Math.random()} />
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const projects = getAllProjects().map(project => project.meta);

    return {
        props: { projects }
    };
};