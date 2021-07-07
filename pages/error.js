import Head from "next/head";
import Link from "next/link";
import { ReportAProblem } from "../components/organisms/ReportAProblem";
import { ActionButton } from "../components/atoms/ActionButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function ErrorPage(props) {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>Error - Erreur</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="dcterms.title" content="Error - Erreur" />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
      </Head>
      <main>
        <section className="layout-container pb-44">
          <img
            className="h-auto w-60 pt-6 xl:w-96 xxl:w-1/2"
            src={"/sig-blk-en.svg"}
            alt={"Symbol of the Government of Canada"}
          />
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
            <div>
              <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0">
                <h1
                  className="font-bold font-display mb-4"
                  data-testid="heading-en"
                >
                  {props.errorTitle}
                </h1>
                {props.statusCode ? (
                  <p
                    className="font-bold font-body mb-8"
                    data-testid="statuscode-en"
                  >
                    Error {props.statusCode}
                  </p>
                ) : (
                  ""
                )}
                <p
                  className="font-body text-sm mb-4 leading-30px"
                  data-testid="errormessage-en"
                >
                  {props.errorMessage}
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    Return to the &nbsp;
                    <Link href="/">
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        Service Canada Labs home page
                      </a>
                    </Link>
                    ;
                  </p>
                </div>
              </div>
              <ReportAProblem language={"en"} />
            </div>
            <div className="flex items-center justify-center circle-background my-8 lg:mt-0">
              <img
                className="w-68px lg:w-12 xl:100px"
                src="/crackedbulb.svg"
                alt="Cracked lightbulb"
              />
            </div>
            <div>
              <div
                className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0"
                lang="fr"
              >
                <h1
                  className="font-bold font-display mb-4"
                  data-testid="heading-fr"
                >
                  {props.errorTitleFr}
                </h1>
                {props.statusCode ? (
                  <p
                    className="font-bold font-body mb-8"
                    data-testid="statuscode-fr"
                  >
                    Erreur {props.statusCode}
                  </p>
                ) : (
                  ""
                )}
                <p
                  className="font-body text-sm mb-4 leading-30px"
                  data-testid="errormessage-fr"
                >
                  {props.errorMessageFr}
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    Retournez à la &nbsp;
                    <Link href="/fr">
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        page d'accueil [Service Canada Labs]
                      </a>
                    </Link>
                    ;
                  </p>
                </div>
              </div>
              <ReportAProblem language="fr" />
            </div>
          </div>
        </section>
      </main>
      <footer className="h-100px w-screen bg-footer-background-color absolute bottom-0">
        <div className="layout-container flex justify-between lg:flex-row-reverse pt-4 lg:pt-0 lg:mt-8">
          <ActionButton
            id="errorTopOfPageButton"
            href="#"
            custom="text-left w-32 flex flex-col lg:hidden"
            text="Top of page / Haut de la page"
            icon="icon-up-caret"
            iconEnd
          />
          <img
            className="h-6 w-auto lg:h-auto lg:w-40"
            src="/wmms-blk.svg"
            alt="Symbol of the Government of Canada"
          />
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const statusCode = context.query.statusCode || "";
  if (statusCode) {
    context.res.statusCode = parseInt(statusCode);
  }
  const errorTitle =
    context.query.errorTitle || "The web site has reported an error.";
  const errorTitleFr =
    context.query.errorTitleFr || "Le site Web a signalé une erreur.";
  const errorMessage =
    context.query.errorMessage ||
    "If the problem persists, report the problem.";
  const errorMessageFr =
    context.query.errorMessageFr ||
    "Si le problème persiste, veuillez signaler le problème.";
  return {
    props: {
      locale: context.locale,
      ...(await serverSideTranslations(context.locale, ["common"])),
      statusCode,
      errorTitle,
      errorTitleFr,
      errorMessage,
      errorMessageFr,
    },
  };
}
