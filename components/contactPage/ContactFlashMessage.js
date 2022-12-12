import styles from "./ContactFlashMessage.module.scss";

export default function ContactFlashMessage(props) {
    return (
        <div style={{backgroundColor: `${props.color}`}} className={styles.ContactFlash}>
            {props.message}
        </div>
    );
};