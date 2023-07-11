import styles from "./Experience.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
    return (
        <section className={styles.Experience} id="experience">
            <h2 className={styles.ExperienceSectionHeader}>EXPERIENCE</h2>
            <p className={styles.ExperienceText}>
                I've been doing web development for ~2 years now and I love to
                learn about emerging technologies and the always changing
                development landscape.
            </p>
            <div className={styles.ExperienceContent}>
                <div className={styles.ExperienceContactSection}>
                    <h4 className={styles.ExperienceContentLogosHeader}>
                        TECHNOLOGIES I'VE WORKED WITH
                    </h4>
                    <div className={styles.logoGrid}>
                        <Image
                            src="/images/techLogos/html.png"
                            width={60}
                            height={60}
                            alt="html logo"
                        />
                        <Image
                            src="/images/techLogos/css.png"
                            width={60}
                            height={60}
                            alt="css logo"
                        />
                        <Image
                            src="/images/techLogos/js.png"
                            width={60}
                            height={60}
                            alt="js logo"
                        />
                        <Image
                            src="/images/techLogos/react.png"
                            width={60}
                            height={60}
                            alt="react logo"
                        />
                        <Image
                            src="/images/techLogos/nextjs.png"
                            width={60}
                            height={60}
                            alt="nextjs logo"
                        />
                        <Image
                            src="/images/techLogos/sass.png"
                            width={60}
                            height={60}
                            alt="sass logo"
                        />
                        <Image
                            src="/images/techLogos/bootstrap.png"
                            width={60}
                            height={60}
                            alt="bootstrap logo"
                        />
                        <Image
                            src="/images/techLogos/node.png"
                            width={60}
                            height={60}
                            alt="node logo"
                        />
                        <Image
                            src="/images/techLogos/mongodb.png"
                            width={60}
                            height={60}
                            alt="mongo db logo"
                        />
                        <Image
                            src="/images/techLogos/vscode.png"
                            width={60}
                            height={60}
                            alt="visual studio code logo"
                        />
                        <Image
                            src="/images/techLogos/github.png"
                            width={60}
                            height={60}
                            alt="git hub logo"
                        />
                        <Image
                            src="/images/techLogos/python.png"
                            width={60}
                            height={60}
                            alt="python logo"
                        />
                    </div>
                </div>
                <div className={styles.ExperienceContactSection}>
                    <h4 className={styles.ExperienceContentCoursesHeader}>
                        COURSES I'VE TAKEN
                    </h4>
                    <ul className={styles.coursesList}>
                        <li>
                            <Link
                                className={styles.courseLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
                            >
                                HarvardX CS50's Introduction to Computer Science
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.courseLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                            >
                                The Web Developer Bootcamp 2022
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.courseLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                            >
                                React – The Complete Guide
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.courseLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/"
                            >
                                React, NodeJS, Express & MongoDB – The MERN Full
                                Stack Guide
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.courseLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.udemy.com/course/nextjs-react-the-complete-guide/"
                            >
                                Next.js & React – The Complete Guide
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.courseLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.udemy.com/course/react-native-the-practical-guide/"
                            >
                                React Native - The Practical Guide 2023
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.courseLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.udemy.com/course/advanced-css-and-sass/"
                            >
                                Advanced CSS and Sass: Flexbox, Grid, Animations
                                and More
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.courseLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/"
                            >
                                JavaScript Algorithms and Data Structures
                                Masterclass
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.courseLink}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.udemy.com/course/git-and-github-bootcamp/"
                            >
                                The Git & GitHub Bootcamp
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
