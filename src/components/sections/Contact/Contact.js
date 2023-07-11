import styles from "./Contact.module.scss";
import Image from "next/image";

export default function Contact() {
    return (
        <section className={styles.Contact} id="contact">
            <Image
                src="/icons/mail-send-line 2.svg"
                width={64}
                height={64}
                alt="mail icon"
                className={styles.mailIcon}
            />
            <h2 className={styles.ContactSectionHeader}>CONTACT ME</h2>
            <p className={styles.ContactText}>
                Whether you have an idea for a project or just want to chat,
                feel free to reach out!
            </p>
            <a
                href="mailto:alex.foto.dev@gmail.com"
                className={styles.ContactButton}
            >
                Say Hello
            </a>
        </section>
    );
}
