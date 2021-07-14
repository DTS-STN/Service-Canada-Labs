import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ActionButton } from "../components/atoms/ActionButton";
import Link from "next/link";

export default function Index(props) {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <div className="bg-splash-img h-screen min-w-300px min-h-screen blur" />
      <Head>
        {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
          <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
        ) : (
          ""
        )}
        <title>alpha.service.canada.ca</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="dcterms.title" content={t("scLabsSplash")} />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
        <meta name="dcterms.service" content="ESDC-EDSC_SCLabs-LaboratoireSC" />
        <meta name="dcterms.issued" content="2021-05-06" />
      </Head>
      <main>
        <div className="absolute inset-0 -mt-12 xl:mb-0 flex flex-col justify-center items-center">
          <div className="bg-footer-background-color h-auto min-w-300px w-300px xl:w-500px">
            <img
              className="h-auto w-64 container mx-auto pt-6 xl:w-2/3 xl:mx-0 xl:px-6"
              src={"/sig-blk-en.svg"}
              alt={"Symbol of the Government of Canada"}
            />
            <div className="w-max container mx-auto py-11 font-bold font-display">
              <h1 className="text-p xl:text-h4">alpha.service.canada.ca</h1>
            </div>
            <div className="flex w-max container pb-11 mx-auto font-display">
              <ActionButton
                id="english-button"
                text="English"
                className="text-center text-sm w-7.5rem xl:w-138px py-3.5 mr-6 rounded leading-3"
                href="/home"
              />
              <ActionButton
                id="french-button"
                text="Français"
                className="text-center w-7.5rem xl:w-138px text-sm py-3.5 rounded leading-3"
                href="/fr/home"
                lang="fr"
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
                <a
                  className="inline-block hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                  lang="fr"
                >
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
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
