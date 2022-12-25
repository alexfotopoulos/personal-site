import { useRouter } from "next/router";
import { getAllProjects } from "../../../helpers";
import ProjectPreview from "../../../components/allProjectspage/ProjectPreview";

export default function TagPage(props) {
    //initiate router to read params
    const router = useRouter();

    return (
        <div className="page-container">
            <h1 className="heading-primary u-margin-bottom-small">{`Projects related to: ${router.query.tagSlug}`}</h1>
            <div>
                {props.projects.map(project => (
                    <ProjectPreview project={project} key={Math.random()} />
                ))}
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    //get all projects
    const projects = getAllProjects();

    //create a set of unique tags from all projects
    const tags = new Set(projects.map(project => (
        project.meta.tags
    )).flat());

    //create paths based on tags
    const paths = Array.from(tags).map(tag => ({ params: { tagSlug: tag } }));

    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps(context) {
    //read params from url
    const params = context.params;

    //extract "tagSlug" param
    const { tagSlug } = params;

    //get all projects which have a tag related to the tagSlug param
    const projects = getAllProjects().filter(project => (
        project.meta.tags.includes(tagSlug)
    ));

    //create list of meta data for relevant projects
    const metaData = projects.map(project => project.meta);

    return {
        props: {
            projects: metaData
        },
        revalidate: 60
    };
};