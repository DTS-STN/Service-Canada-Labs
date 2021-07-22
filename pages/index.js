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
      <div className="z-0 fixed inset-0 filter blur-sm bg-splash-img-mobile xs:bg-splash-img bg-cover bg-center h-screen min-w-300px min-h-screen" />
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
        <div className="flex flex-col justify-center items-center m-auto v-xxs:h-screen">
          <div className="z-10 bg-white h-auto min-w-300px w-300px xl:w-500px">
            <img
              className="h-auto w-64 container mx-auto pt-6 xl:w-2/3 xl:mx-0 xl:px-6"
              src={"/sig-blk-en.svg"}
              alt={"Government of Canada / Gouvernement du Canada"}
            />
            <div className="flex w-max container mx-auto py-6 font-bold font-display">
              <h1 className="text-p text-right xl:text-h4 mr-6 w-32 xl:w-40">
                Service Canada Labs
              </h1>
              <h2 className="text-p xl:text-h4 w-32 xl:w-40" lang="fr">
                Laboratoires de Service Canada
              </h2>
            </div>
            <div className="flex w-max container pb-6 mx-auto font-display">
              <ActionButton
                id="english-button"
                text="English"
                lang="en"
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
          <div className="relative py-7 bg-splash-page-bottom text-p h-auto min-w-300px w-300px flex justify-between container p-6 xl:w-500px xl:items-center">
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
              alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada"
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
