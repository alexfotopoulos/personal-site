import Image from "next/image";
import styles from "./ProjectPreview.module.css";
import copePic from "../../public/images/copePic.jpg";
import Link from "next/link";

export default function Project() {
    return (
        <div className={styles.project}>
            <Link href={`/projects/specificProject`}>
                <a>
                    <Image src={copePic} height={300} width={200} />
                </a>
            </Link>
            <div className={styles.projectDetails}>
                <Link href={`/projects/specificProject`}>
                    <a>
                        <p>title</p>
                    </a>
                </Link>
                <p>date</p>
                <p>this is some long excerpt which would affect the width of the parent div</p>
                <ul className={styles.projectDetailsTagsList}>
                    <Link href={`/projects/tags/slug`}>
                        <a>
                            <li className={styles.tag}>javascript</li>
                        </a>
                    </Link>
                    <Link href={`/projects/tags/slug`}>
                        <a>
                            <li className={styles.tag}>next</li>
                        </a>
                    </Link>
                    <Link href={`/projects/tags/slug`}>
                        <a>
                            <li className={styles.tag}>mongo</li>
                        </a>
                    </Link>
                    <Link href={`/projects/tags/slug`}>
                        <a>
                            <li className={styles.tag}>express</li>
                        </a>
                    </Link>
                </ul>
            </div>
        </div>
    );
};