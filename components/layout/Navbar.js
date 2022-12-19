import Image from "next/image";
import logo from "../../public/images/personalLogoWhite.svg";
import Link from "next/link";
import styles from "./Navbar.module.scss";



export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <a><Image src={logo} alt="personal logo" height={50} width={50} /></a>
      </Link >
      <div className={styles.linksGroup}>
        <Link href="/projects"><a className={styles.link}>Projects</a></Link>
        <Link href="/about"><a className={styles.link}>About</a></Link>
        <Link href="/contact"><a className={styles.link}>Contact</a></Link>
      </div>
    </div>
  );
};