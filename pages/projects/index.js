import ProjectPreview from "../../components/projectpage/ProjectPreview";

export default function AllProjects() {
    return (
        <div className="projectpageProjectsList">
            <h1>All Projects</h1>
            <div>
                <ProjectPreview />
                <ProjectPreview />
            </div>
        </div>
    );
};