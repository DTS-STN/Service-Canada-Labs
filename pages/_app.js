import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import "../styles/forms.css";
import "../styles/menu.css";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Noto_Sans, Lato } from "next/font/google";

config.autoAddCss = false;

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={[notoSans.className, lato.className]}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(MyApp);
