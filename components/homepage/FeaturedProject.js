import styles from "./FeaturedProject.module.css";
import Image from "next/image";
import copePic from "../../public/images/copePic.jpg";
import Link from "next/link";

export default function FeaturedProject(props) {

    const { slug, excerpt, title, image, date } = props.project;

    return (
        <Link href={`/projects/${slug}`}>
            <div className={styles.featuredProject}>
                <Image src={copePic} height={100} width={100} layout="responsive" />
                <div className={styles.featuredProjectInfo}>
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <p>{excerpt}</p>
                </div>
            </div>
        </Link>
    );
};