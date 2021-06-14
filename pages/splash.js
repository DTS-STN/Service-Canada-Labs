import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ActionButton } from "../components/atoms/ActionButton";
import Link from "next/link";

const setLanguage = (event) => {
  event.target.id === "french-button"
    ? window.localStorage.setItem("lang", "fr")
    : window.localStorage.setItem("lang", "en");
};

export default function Splash(props) {
  return (
    <>
      <div className="bg-splash-img h-screen min-w-300px min-h-screen blur" />
      <Head>
        <title>alpha.service.canada.ca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute inset-0 -mt-12 xl:mb-0 flex flex-col justify-center items-center">
        <div className="bg-footer-background-color h-auto min-w-300px w-300px xl:w-500px">
          <img
            className="h-auto w-64 container mx-auto pt-6 xl:w-2/3 xl:mx-0 xl:px-6"
            src={"/sig-blk-en.svg"}
            alt={"Symbol of the Government of Canada"}
          />
          <div className="w-max container mx-auto py-11 text-p xl:text-h4 font-bold font-display">
            alpha.service.canada.ca
          </div>
          <div className="flex w-max container pb-11 mx-auto font-display">
            <ActionButton
              id="english-button"
              text="English"
              className="text-center text-sm w-7.5rem xl:w-138px py-3.5 mr-6 rounded leading-3"
              href="/"
              onClick={setLanguage}
            />
            <ActionButton
              id="french-button"
              text="Français"
              className="text-center w-7.5rem xl:w-138px text-sm py-3.5 rounded leading-3"
              href="/fr"
              onClick={setLanguage}
            />
          </div>
        </div>
        <div className="relative py-8 bg-splash-page-bottom text-p h-auto min-w-300px w-300px flex justify-between container p-6 xl:w-500px xl:items-center">
          <div className="w-28 text-base xl:text-p xl:w-max font-body">
            <Link href="https://www.canada.ca/en/transparency/terms.html">
              <a className="inline-block w-28 xl:w-max mr-0 hover:text-canada-footer-hover-font-blue text-canada-footer-font splash-link">
                Terms & conditions
              </a>
            </Link>
            <Link href="https://www.canada.ca/fr/transparence/avis.html">
              <a className="inline-block hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                Avis
              </a>
            </Link>
          </div>
          <img
            className="h-auto w-24 xl:w-28"
            src="/wmms-blk.svg"
            alt="Symbol of the Government of Canada"
          />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
