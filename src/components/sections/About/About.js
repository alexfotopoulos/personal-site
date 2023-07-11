import styles from "./About.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className={styles.About} id="about">
            <h2 className={styles.AboutSectionHeader}>ABOUT ME</h2>
            <Image
                src="/images/Headshot.jpg"
                width={500}
                height={500}
                alt="headshot"
                className={styles.Headshot}
            />
            <p className={styles.AboutParagraph}>
                I'm a self-taught web developer with a passion for web
                application development. I'm seeking opportunities to further
                develop my skills and build beautiful and functional web
                applications using React and Next.js. I've taken approximately
                275hrs of expert-led online courses and have countless more
                hours working on personal projects.
            </p>
            <div>
                <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/alexfotopoulos"
                >
                    <Image
                        src="/icons/github-fill.svg"
                        width={40}
                        height={40}
                        alt="github icon"
                    />
                </Link>
                <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/alexander-fotopoulos-2a55b28a/"
                >
                    <Image
                        src="/icons/linkedin-box-fill.svg"
                        width={40}
                        height={40}
                        alt="linkedin icon"
                        style={{ marginLeft: "2rem" }}
                    />
                </Link>
            </div>
        </section>
    );
}
