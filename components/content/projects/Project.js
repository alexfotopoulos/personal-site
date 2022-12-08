import styles from "./Project.module.scss";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";

export default function Project(props) {
    //extract relevant data from props
    const { title, image, date } = props.meta;

    return (
        <div className="page-container">
            <Head>
                <title>{title}</title>
            </Head>
            <div className={styles.project}>
                <header className={styles.header}>
                    <h1 className={styles.headerElement}>{title}</h1>
                    <p className={`${styles.headerElement} ${styles.target}`}>{date}</p>
                </header>
                <MDXRemote {...props.source} />
            </div>
        </div>
    );
};