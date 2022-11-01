import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContactFormInput from "./ContactFormInput";
import ContactFormSubmitButton from "./ContactFormSubmitButton";
import styles from "./ContactForm.module.css";


export default function ContactForm() {
    //initialize router to redirect after submission
    const router = useRouter();

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
            router.push("/");
        } else {
            alert("Message not sent. Please try again");
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