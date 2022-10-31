import Project from "../../components/content/projects/Project";
import { getProjectFromSlug, getSlugs } from "../../helpers";
import { serialize } from "next-mdx-remote/serialize";

export default function ProjectPage(props) {
    return (
        <div className="project">
            <Project source={props.project.source} meta={props.project.meta} />
        </div>
    );
};

export async function getStaticPaths() {
    //create paths based on slugs of all projects
    const paths = getSlugs().map(projectSlug => ({ params: { projectSlug } }));

    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps(context) {
    //retrieve content and meta for a specific project
    const { content, meta } = getProjectFromSlug(context.params.projectSlug);

    //serialize content
    const mdxSource = await serialize(content);

    return {
        props: {
            project: {
                source: mdxSource, meta
            }
        },
        revalidate: 60
    };
};