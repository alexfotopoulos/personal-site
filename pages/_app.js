import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alex Fotopoulos - Web Developer</title>
        <link rel="shortcut icon" href="/images/personalLogoWhite.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};