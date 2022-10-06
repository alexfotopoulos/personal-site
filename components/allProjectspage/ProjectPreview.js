import Image from "next/image";
import styles from "./ProjectPreview.module.css";
import copePic from "../../public/images/copePic.jpg";
import Link from "next/link";

export default function Project(props) {

    const { slug, excerpt, title, tags, image, date } = props.project;

    return (
        <div className={styles.project}>
            <Link href={`/projects/${slug}`}>
                <a>
                    <Image src={copePic} height={300} width={200} />
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