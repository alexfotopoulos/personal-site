import ProjectPreview from "../../components/allProjectspage/ProjectPreview";
import { getAllProjects } from "../../helpers";

export default function AllProjects(props) {
    return (
        <div className="page-container">
            <h1 className="heading-primary u-margin-bottom-small">All Projects</h1>
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
        props: {
            projects
        },
        revalidate: 60
    };
};