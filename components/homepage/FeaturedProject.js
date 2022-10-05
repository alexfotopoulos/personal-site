import styles from "./FeaturedProject.module.css";
import Image from "next/image";
import copePic from "../../public/images/copePic.jpg"

export default function FeaturedProject() {
    return (
        <div className={styles.featuredProject}>
            <Image src={copePic} height={100} width={100} layout="responsive" />
            <div className={styles.featuredProjectInfo}>
                <h3>title</h3>
                <p>date</p>
                <p>this is an extended excerpt which give you some super high level info about the project. Its not even info really, more of just a title</p>
            </div>
        </div>
    );
};