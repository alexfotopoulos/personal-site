import styles from "./FeaturedProjectsGrid.module.css";
import FeaturedProject from "./FeaturedProject";

export default function FeaturedProjects(props) {
    return (
        <div className={styles.featuredProjects}>
            {props.projects.map(fp => {
                return <FeaturedProject project={fp} key={Math.random()} />
            })}
        </div>
    );
};