import styles from "./ProjectTile.module.scss";
import Image from "next/image";

export default function ProjectTile({
    image,
    title,
    toggleModal,
    modalData,
    setModalData,
}) {
    //function to handle modal togo and set modal data
    function modalHandler() {
        setModalData(modalData);
        toggleModal();
    }
    return (
        <div className={styles.ProjectTile} onClick={modalHandler}>
            <Image
                src="/icons/zoom-in-line.svg"
                width={30}
                height={30}
                alt="zoom in"
                className={styles.ProjectTileZoomIcon}
            />
            <Image
                src={`/images/newprojectImages/${image}`}
                width={400}
                height={300}
                alt={title}
                className={styles.ProjectImage}
            />
            <div className={styles.ProjectTitle}>{title}</div>
        </div>
    );
}
