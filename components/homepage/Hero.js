import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div >
            <img src={"images/NewHeadshot.jpg"} alt="" className={styles.img} />
            </div>
            <h1>Hi, I'm Alex</h1>
            <h4>I'm a web developer interested in building beautiful and functional web applications</h4>

            <p>Take a look around! I post about projects, learnings, and anything else related to web development. Feel free to reach out!</p>
        </div>
    );
};