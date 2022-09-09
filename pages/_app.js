import { appWithTranslation } from "next-i18next";
import "../icomoon/style.css";
import "../styles/globals.css";
import "../styles/forms.css";
import "../styles/menu.css";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

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
        <meta name="VERSION" content={process.env.NEXT_PUBLIC_VERSION} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
