import styles from "./FeaturedProject.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject(props) {
    //extract relevant data from props
    const { slug, excerpt, title, image, date } = props.project;

    //create path for image
    const imagePath = `/images/projectImages/${image}`;

    return (
        <Link href={`/projects/${slug}`}>
            <div className={styles.featuredProject}>
                <Image src={imagePath} height={100} width={200} layout="responsive" />
                <div className={styles.featuredProjectInfo}>
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <p>{excerpt}</p>
                </div>
            </div>
        </Link>
    );
};