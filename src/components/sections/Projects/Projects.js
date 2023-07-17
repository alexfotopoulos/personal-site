"use client";

import { useState, useCallback } from "react";
import styles from "./Projects.module.scss";
import ProjectTile from "../../projects/ProjectTile";
import ProjectModal from "../../projects/ProjectModal";
import { projects } from "../../../../content/projects";

export default function Projects() {
    //state to set modal data
    const [modalData, setModalData] = useState({});

    //initialize state for ProjectModal
    const [showModal, setShowModal] = useState(false);

    //function to toggle modal
    const toggleModal = useCallback(() => {
        setShowModal((prevShowModal) => !prevShowModal);
    }, []);

    return (
        <section className={styles.Projects} id="projects">
            <h2 className={styles.ProjectsSectionHeader}>PROJECTS I'VE DONE</h2>
            <div className={styles.projectsContainer}>
                {projects.map((p) => (
                    <ProjectTile
                        key={p.title}
                        image={p.image}
                        title={p.title}
                        toggleModal={toggleModal}
                        modalData={p}
                        setModalData={setModalData}
                    />
                ))}
            </div>
            {showModal && (
                <ProjectModal toggleModal={toggleModal} data={modalData} />
            )}
        </section>
    );
}
