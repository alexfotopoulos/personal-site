import "../styles/globals.scss";
import "../styles/sass/base/_typography.scss";
import "../styles/sass/base/_utilities.scss";
import "../styles/sass/abstracts/_animations.scss";

import Layout from "../components/layout/Layout";
import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alex Fotopoulos - Web Developer</title>
        <link rel="shortcut icon" href="/images/personalLogoWhite.svg" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </Layout>
  );
};