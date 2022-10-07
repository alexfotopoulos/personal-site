import { useRouter } from "next/router";
import { getAllProjects } from "../../../helpers";
import ProjectPreview from "../../../components/allProjectspage/ProjectPreview";

export default function TagPage(props) {

    const router = useRouter();

    return (
        <div className="projectpageProjectsList">
            <h1>{`Projects related to: ${router.query.tagSlug}`}</h1>
            <div>
                {props.projects.map(project => (
                    <ProjectPreview project={project} key={Math.random()} />
                ))}
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const projects = getAllProjects();
    const tags = new Set(projects.map(project => (
        project.meta.tags
    )).flat());
    const paths = Array.from(tags).map(tag => ({ params: { tagSlug: tag } }));

    return {
        paths,
        fallback: true
    };
};

export async function getStaticProps(context) {
    const params = context.params;

    const { tagSlug } = params;

    const projects = getAllProjects().filter(project => (
        project.meta.tags.includes(tagSlug)
    ));

    const metaData = projects.map(project => project.meta);

    return {
        props: { projects: metaData }
    };
};