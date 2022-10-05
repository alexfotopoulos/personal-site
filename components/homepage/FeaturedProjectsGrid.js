import styles from "./FeaturedProjectsGrid.module.css";
import FeaturedProject from "./FeaturedProject";

export default function FeaturedProjects() {
    return (
        <div className={styles.featuredProjects}>
            <FeaturedProject />
            <FeaturedProject />
            <FeaturedProject />
        </div>
    );
};