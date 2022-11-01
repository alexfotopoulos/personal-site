import ContactForm from "../components/contactPage/ContactForm";
import ContactFlashMessage from "../components/contactPage/ContactFlashMessage";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactPage() {
    const [flashOpen, setFlashOpen] = useState(true);
    const [flashColor, setFlashColor] = useState("");
    const [flashMessage, setFlashMessage] = useState("");

    //initialize router
    const router = useRouter();

    function closeFlash(reset) {
        setTimeout(() => {
            setFlashOpen(false);
            if (reset) {
                router.reload();
            } else {
                router.push("/");
            }
        }, 2000);
    };

    return (
        <div className="contactPage">
            <h1>Contact Me</h1>
            <ContactForm setFlashOpen={setFlashOpen} setFlashColor={setFlashColor} setFlashMessage={setFlashMessage} closeFlash={closeFlash} />
            {flashOpen && <ContactFlashMessage open={flashOpen} color={flashColor} message={flashMessage} />}
        </div>
    );
};