import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div >
            <img src={"images/NewHeadshot.jpg"} alt="" className={styles.img} />
            </div>
            <h1 className={"heading-primary u-margin-bottom-big u-margin-top-medium"}>Hi, I'm Alex</h1>
            <h2 className={"heading-tertiary"}>I'm a web developer interested in building beautiful and functional web applications</h2>

            {/* <p className="heading-tertiary">Take a look around! I post about previous and current projects. Feel free to reach out!</p> */}
        </div>
    );
};