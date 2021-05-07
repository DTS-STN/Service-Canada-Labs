import { appWithTranslation } from "next-i18next";
import "../icomoon/style.css";
import "../styles/globals.css";
import "../styles/forms.css";
import "../styles/fonts.css";
import "../styles/menu.css";
import "../styles/filterExperiments.css"
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="og:builddate"
          content={process.env.NEXT_PUBLIC_BUILD_DATE}
        />
        <meta name="og:buildid" content={process.env.NEXT_PUBLIC_TC_BUILD} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
