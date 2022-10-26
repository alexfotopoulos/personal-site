import Image from "next/image";
import styles from "./ProjectPreview.module.css";
import Link from "next/link";

export default function Project(props) {
    //extract relevant info data props
    const { slug, excerpt, title, tags, image, date } = props.project;

    //create path for image
    const imagePath = `/images/projectImages/${image}`;

    return (
        <div className={styles.project}>
            <Link href={`/projects/${slug}`}>
                <a className={styles.imageContainer}>
                    <Image src={imagePath} height={200} width={300} layout="responsive"/>
                </a>
            </Link>
            <div className={styles.projectDetails}>
                <Link href={`/projects/${slug}`}>
                    <a>
                        <p>{title}</p>
                    </a>
                </Link>
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
    );
};