import { I18nProvider } from "next-rosetta";
import "../icomoon/style.css";
import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <I18nProvider table={pageProps.table}>
        <Component {...pageProps} />
      </I18nProvider>
    </>
  );
}

export default MyApp;
