import { I18nProvider } from "next-rosetta";
import "../icomoon/style.css";
import "../styles/globals.css";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <I18nProvider table={pageProps.table}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default MyApp;
