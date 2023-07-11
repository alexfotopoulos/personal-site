import "../../styles/globals.scss";
import Navbar from "../components/navbar/Navbar";

export const metadata = {
    title: "Alex  Fotopoulos - Web Developer",
    description: "personal website/portfolio for Alex Fotopoulos",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="shortcut icon" href="/images/personalLogoWhite.svg" />
            <body style={{ position: "relative" }}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
