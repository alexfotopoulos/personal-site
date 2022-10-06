import Project from "../../components/content/projects/Project";
import { getProjectFromSlug, getSlugs } from "../../helpers";
import { serialize } from "next-mdx-remote/serialize";

export default function ProjectPage(props) {
    return (
        <div className="projectpageProjectsList">
            <Project source={props.project.source} meta={props.project.meta} />
        </div>
    );
};

export async function getStaticPaths() {
    const paths = getSlugs().map(projectSlug => ({ params: { projectSlug } }))
    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps(context) {
    const { content, meta } = getProjectFromSlug(context.params.projectSlug);
    const mdxSource = await serialize(content);

    return {
        props: {
            project: {
                source: mdxSource, meta
            }
        }
    };
};