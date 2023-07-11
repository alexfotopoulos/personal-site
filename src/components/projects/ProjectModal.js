import styles from "./ProjectModal.module.scss";
import Image from "next/image";

export default function ProjectModal({ toggleModal, data }) {
    return (
        <div>
            <div
                className={styles.backdrop}
                onClick={() => toggleModal()}
            ></div>
            <div className={styles.ProjectModal}>
                <h3 className={styles.ProjectModalHeader}>{data.title}</h3>
                <Image
                    src={"/icons/close-line.svg"}
                    width={20}
                    height={20}
                    alt={"close modal"}
                    className={styles.modalIcon}
                    onClick={() => toggleModal()}
                />
                <Image
                    src={`/images/newprojectImages/${data.image}`}
                    width={600}
                    height={450}
                    alt={"next-dashboard"}
                    className={styles.ProjectImage}
                />
                <p className={styles.ProjectDescription}>{data.description}</p>
                {data.title === "next-dashboard" && (
                    <p className={styles.ProjectDescription}>
                        Creative Tim's website can be found{" "}
                        <a
                            href="https://www.creative-tim.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            here
                        </a>
                        , and his demo of the dashboard can be found{" "}
                        <a
                            href="https://material-dashboard-react-nodejs.creative-tim.com/auth/login"
                            target="_blank"
                            rel="noreferrer"
                        >
                            here
                        </a>
                    </p>
                )}
                <div className={styles.buttonContainer}>
                    {data.siteUrl && (
                        <a
                            href={data.siteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.ProjectModalButton}
                        >
                            VISIT SITE
                        </a>
                    )}
                    {data.sourceUrl && (
                        <a
                            href={data.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.ProjectModalButton}
                        >
                            VIEW SOURCE
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
