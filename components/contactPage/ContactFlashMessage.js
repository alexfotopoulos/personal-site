import styles from "./ContactFlashMessage.module.scss";

export default function ContactModal(props) {
    return (
        <div style={{backgroundColor: `${props.color}`}} className={styles.ContactFlash}>
            {props.message}
        </div>
    );
};