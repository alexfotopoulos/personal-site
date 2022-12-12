import { useState, useEffect } from "react";
import styles from "./ContactForm.module.scss";


export default function ContactForm(props) {
    //initialize state for inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    //functions to track changes to inputs and store in state
    function handleChangeName(newName) {
        setName(newName);
    };
    function handleChangeEmail(newEmail) {
        setEmail(newEmail);
    };
    function handleChangeMessage(newMessage) {
        setMessage(newMessage);
    };

    //initialize state for valid submission
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        if (name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        };
    }, [name, email, message]);

    //function to handle submission
    async function handleSubmit(evt) {
        evt.preventDefault();
        props.setFlashOpen(true);
        props.setFlashColor("#808080");
        props.setFlashMessage("Sending message...");
        const data = {
            name,
            email,
            message
        };
        const response = await fetch("/api/sendmail", {
            method: "POST",
            body: JSON.stringify(data)
        });
        const res = await response.json();
        if (res.message === "success") {
            props.setFlashColor("#ecb365");
            props.setFlashMessage("Message sent!");
            props.closeFlash(false);
        } else {
            props.setFlashColor("#e43636");
            props.setFlashMessage("Error. Please try again.");
            props.closeFlash(true);
        };
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <input className={styles.contactFormInput} placeholder="Full Name" value={name} onChange={evt => handleChangeName(evt.target.value)} id="name" required />
                <label className={styles.contactFormLabel} htmlFor="name">Full Name</label>
            </div>
            <div className={styles.inputGroup}>
                <input className={styles.contactFormInput} placeholder="Email" value={email} onChange={evt => handleChangeEmail(evt.target.value)} id="email" required />
                <label className={styles.contactFormLabel} htmlFor="email">Email</label>
            </div>
            <div className={styles.inputGroup}>
                <textarea rows="5" className={styles.contactFormInput} placeholder="Message" value={message} onChange={evt => handleChangeMessage(evt.target.value)} id="message" required />
                <label className={styles.contactFormLabelTextArea} htmlFor="message">Message</label>
            </div>
            <button className={styles.contactFormButton} disabled={submitDisabled} onClick={handleSubmit}>SUBMIT</button>
        </form>
    );
};