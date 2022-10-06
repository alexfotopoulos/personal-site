import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout(props) {
    return (
        <>
        <Head>
            <title>Alex Fotopoulos - Web Developer</title>
        </Head>
            <Navbar />
            <main>{props.children}</main>
        </>
    );
};