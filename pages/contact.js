import ContactForm from "../components/contactPage/ContactForm";
import ContactFlashMessage from "../components/contactPage/ContactFlashMessage";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactPage() {
    const [flashOpen, setFlashOpen] = useState(false);
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
        }, 3000);
    };

    return (
        <div className="contactPage">
            <h1>Contact Me</h1>
            {flashOpen && <ContactFlashMessage open={flashOpen} color={flashColor} message={flashMessage} />}
            <ContactForm setFlashOpen={setFlashOpen} setFlashColor={setFlashColor} setFlashMessage={setFlashMessage} closeFlash={closeFlash} />
        </div>
    );
};