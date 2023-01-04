import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/personalLogoWhite.svg";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [collapsed, setCollapsed] = useState();

  useEffect(() => {
    if (window.innerWidth < 992) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 992) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
    }
    window.addEventListener("resize", handleResize)
  }, [])


  return (
    <nav className={`${styles.Navbar} navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <Link href="/" className={styles.logo}>
          <a><Image src={logo} alt="personal logo" height={50} width={50} /></a>
        </Link >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className={styles.navIcon}></span>
        </button>
        <div className={collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse position-absolute end-0 me-4"} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/projects"><a className={collapsed ? `${styles.drawerLink}` : `${styles.link}`}>Projects</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/about"><a className={collapsed ? `${styles.drawerLink}` : `${styles.link}`}>About</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/contact"><a className={collapsed ? `${styles.drawerLink}` : `${styles.link}`}>Contact</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};