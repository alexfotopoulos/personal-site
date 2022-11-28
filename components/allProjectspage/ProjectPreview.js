import styles from "./ProjectPreview.module.css";
import Link from "next/link";

export default function Project(props) {
    //extract relevant info data props
    const { slug, excerpt, title, tags, image, date } = props.project;

    //create path for image
    const imagePath = `/images/projectImages/${image}`;

    return (
        <Link href={`/projects/${slug}`}>
            <div className={styles.project}>
                <img className={styles.img} src={imagePath} alt="" />
                <div className={styles.projectDetails}>
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <p>{excerpt}</p>
                    <ul className={styles.projectDetailsTagsList}>
                        {tags.map(tag => (
                            <Link key={Math.random()} href={`/projects/tags/${tag}`}>
                                <a>
                                    <li className={styles.tag}>{tag}</li>
                                </a>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </Link >
    );
};