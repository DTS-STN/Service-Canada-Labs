import { appWithTranslation } from "next-i18next";
import "../icomoon/style.css";
import "../styles/globals.css";
import "../styles/forms.css";
import "../styles/fonts.css";
import "../styles/menu.css";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lang = window.localStorage.getItem("lang");
      if (lang === "en" || lang === "fr") {
        router.push(router.asPath, {}, { locale: lang });
      } else {
        router.push("splash");
      }
    }
  }, []);

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
