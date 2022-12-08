import { useState, useEffect } from "react";
import ContactFormInput from "./ContactFormInput";
import ContactFormSubmitButton from "./ContactFormSubmitButton";
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
    async function handleSubmit() {
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
            <ContactFormInput value={name} onChange={handleChangeName} label="name" multiLine={false} />
            <ContactFormInput value={email} onChange={handleChangeEmail} label="email" multiLine={false} />
            <ContactFormInput value={message} onChange={handleChangeMessage} label="message" multiLine={true} />
            <ContactFormSubmitButton disabled={submitDisabled} onClick={handleSubmit} />
        </form>
    );
};