import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ActionButton } from "../components/atoms/ActionButton";
import Link from "next/link";

export default function splash(props) {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="bg-banner-img h-screen min-w-300px min-h-screen blur" />
      <Head>
        <title>{t("splashTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute inset-0 m-auto flex flex-col justify-center items-center">
        <div className="bg-footer-background-color h-230px min-w-300px w-300px xl:w-500px">
          <img
            className="h-auto w-64 container mx-auto pt-6 pb-8 xl:w-80 xl:mx-0 xl:px-6"
            src={"/sig-blk-en.svg"}
            alt={"Symbol of the Government of Canada"}
          />
          <div className="w-max container mx-auto pb-8 text-p font-medium">
            alpha.service.canada.ca
          </div>
          <div className="flex w-max container mx-auto">
            <ActionButton
              id="english-button"
              text="English"
              className="inline-block w-30 mr-6"
              href="/"
            />
            <ActionButton
              id="french-button"
              text="Francais"
              className="w-30 inline-block"
              href="/fr"
            />
          </div>
        </div>
        <div className="relative bg-splash-page-bottom text-base h-auto min-w-300px w-300px flex justify-between container p-6 xl:w-500px xl:items-center">
          <div className="w-28 xl:w-max">
            <Link href="https://www.canada.ca/en/transparency/terms.html">
              <a className="inline-block w-22 xl:w-max mr-0 font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                Terms & conditions
              </a>
            </Link>
            <div className="float-right text-h2 pt-5 text-canada-footer-font leading-none inline-block pr-3 xl:absolute xl:inset-y-0 xl:pl-1 xl:float-none xl:pt-0 xl:mt-4">
              .
            </div>
            <Link href="https://www.canada.ca/fr/transparence/avis.html">
              <a className="inline-block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font xl:pl-4">
                Avis
              </a>
            </Link>
          </div>
          <img
            className="h-auto w-20 xl:w-28"
            src="/wmms-blk.svg"
            alt="Symbol of the Government of Canada"
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
