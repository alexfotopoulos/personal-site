import ProjectPreview from "../../components/allProjectspage/ProjectPreview";
import { getAllProjects } from "../../helpers";

export default function AllProjects(props) {
    return (
        <div>
            <h1 className="allProjectsTitle">All Projects</h1>
            <div>
                {props.projects.map(project => (
                    <ProjectPreview project={project} key={Math.random()} />
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    //retrieve meta data from all projects
    const projects = getAllProjects().map(project => project.meta);

    return {
        props: { projects }
    };
};