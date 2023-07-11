import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <Image
                src="/images/heroImage.jpg"
                width={750}
                height={750}
                alt="hero image"
                className={styles.HeroBackgroundImage}
            />
            <section className={styles.Hero} id="hero">
                <div className={styles.HeroTextContainer}>
                    <h1>HI, I'M ALEX</h1>
                    <h4>
                        I'm a web developer with a passion for building
                        beautiful and functional web applications
                    </h4>
                </div>
            </section>
        </>
    );
}
