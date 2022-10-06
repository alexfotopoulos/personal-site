import styles from "./Project.module.css";

export default function Project() {
    return (
        <div className={styles.project}>
            <header className={styles.header}>
                <h1 className={styles.headerElement}>Title</h1>
                <p className={`${styles.headerElement} ${styles.target}`}>date</p>
            </header>
            <div>
                <h3></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut adipisci neque, minima voluptate est laboriosam quasi ipsam accusantium harum hic aspernatur temporibus necessitatibus incidunt id ipsum veniam eveniet similique non.</p>
            </div>
        </div>
    );
};