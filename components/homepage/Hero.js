import styles from "./Hero.module.css";
import Image from "next/image";
import me from "../../public/images/copePic.jpg";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div >
                <Image className={styles.image} src={me} height={300} width={225} />
            </div>
            <h1>Hi, I'm Alex</h1>
            <h4>I'm a web developer interested in building beautiful and functional web applications</h4>

            <p>Take a look around! I post about projects, learnings, and anything else related to web development. Feel free to reach out!</p>
        </div>
    );
};