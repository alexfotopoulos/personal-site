"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
    //state to determine style of navbar
    const [isSrolled, setIsScrolled] = useState(false);

    //function to determine vertical scroll and change state accordingly
    const onScroll = useCallback((event) => {
        const { pageYOffset } = window;
        if (pageYOffset > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, []);

    //function to listen for vertical scroll
    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        };
    }, []);

    return (
        <nav
            className={
                isSrolled ? styles.Navbar__scrolled : styles.Navbar__notScrolled
            }
        >
            <div>
                <Link
                    className={styles.NavbarBrand}
                    href="#hero"
                    replace={true}
                >
                    {"< anf />"}
                </Link>
            </div>
            <ul className={styles.NavbarList}>
                <li>
                    <Link
                        className={styles.NavbarListItem}
                        href="#about"
                        replace={true}
                    >
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.NavbarListItem}
                        href="#experience"
                        replace={true}
                    >
                        EXPERIENCE
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.NavbarListItem}
                        href="#projects"
                        replace={true}
                    >
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.NavbarListItem}
                        href="#contact"
                        replace={true}
                    >
                        CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
