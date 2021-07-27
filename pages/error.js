import Head from "next/head";
import Link from "next/link";
import { ReportAProblem } from "../components/organisms/ReportAProblem";
import { ActionButton } from "../components/atoms/ActionButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ErrorPage(props) {
  const { t } = useTranslation("common");
  const { query } = useRouter();

  process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL
    ? useEffect(() => {
        window.adobeDataLayer = window.adobeDataLayer || [];
        window.adobeDataLayer.push({ event: "pageLoad" });
      })
    : "";

  const statusCode = query.statusCode || "";
  const errorTitle = query.errorTitle || "The web site has reported an error.";
  const errorTitleFr =
    query.errorTitleFr || "Le site Web a signalé une erreur.";
  const errorMessage =
    query.errorMessage || "If the problem persists, report the problem.";
  const errorMessageFr =
    query.errorMessageFr ||
    "Si le problème persiste, veuillez signaler le problème.";

  return (
    <>
      <div className="min-h-screen relative">
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}
          <title data-gc-analytics-error={props.statusCode}>
            Error - Erreur
          </title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="dcterms.title" content="Error - Erreur" />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
          />
          <meta name="dcterms.creator" content={t("creator")} />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" content="2021-06-28" />
        </Head>
        <main>
          <section className="layout-container pb-44">
            <img
              className="h-auto w-60 pt-6 xl:w-96 xxl:w-1/2"
              src={"/sig-blk-en.svg"}
              alt={"Symbol of the Government of Canada"}
            />
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
              {/* Left Side (English section) */}
              <div>
                <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 lg:h-500px mb-8 lg:mb-0">
                  <h1
                    className="font-bold font-display mb-4"
                    data-testid="heading-en"
                  >
                    {errorTitle}
                  </h1>
                  {statusCode ? (
                    <p
                      className="font-bold font-body mb-8"
                      data-testid="statuscode-en"
                    >
                      Error {statusCode}
                    </p>
                  ) : (
                    ""
                  )}
                  <p
                    className="font-body text-p font-bold mb-4 leading-30px"
                    data-testid="errormessage-en"
                  >
                    {errorMessage}
                  </p>
                  {errorMessage === "Wrong URL" ? (
                    <>
                      {/* Wrong URL English Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        It may be due to an invalid ID or missing ID. What’s
                        next?
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            Try clicking the link again from your email;
                          </p>
                        </li>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            Contact us at{" "}
                            <a
                              href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                              className="text-custom-blue-link underline"
                            >
                              experience@service.gc.ca
                            </a>{" "}
                            and we’ll help you out.
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        Thank you for your patience.
                      </p>
                    </>
                  ) : errorMessage === "Expired URL" ? (
                    <>
                      {/* Expired URL English Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        It may be due to an expired URL if it has been more than
                        24 hours since you received the email to verify your
                        email address. What’s next?
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            <Link href="/signup">
                              <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                                Sign up
                              </a>
                            </Link>{" "}
                            again
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        Thank you for your patience.
                      </p>
                    </>
                  ) : (
                    /* General Error English Section */
                    <div className="flex">
                      <span className="error404-link" />
                      <p className="font-body text-sm leading-30px">
                        Return to the &nbsp;
                        <Link href="/">
                          <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                            Service Canada Labs home page
                          </a>
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
                <ReportAProblem language={"en"} />
              </div>
              <div className="flex items-center justify-center circle-background my-8 lg:mt-0">
                <img
                  className="w-68px xl:w-24"
                  src="/crackedbulb.svg"
                  alt="Cracked lightbulb"
                />
              </div>
              {/* Right Side (French section) */}
              <div>
                <div
                  className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 lg:h-500px mb-8 lg:mb-0"
                  lang="fr"
                >
                  <h1
                    className="font-bold font-display mb-4"
                    data-testid="heading-fr"
                  >
                    {errorTitleFr}
                  </h1>
                  {statusCode ? (
                    <p
                      className="font-bold font-body mb-8"
                      data-testid="statuscode-fr"
                    >
                      Erreur {statusCode}
                    </p>
                  ) : (
                    ""
                  )}
                  <p
                    className="font-body text-p font-bold mb-4 leading-30px"
                    data-testid="errormessage-fr"
                  >
                    {errorMessageFr}
                  </p>
                  {errorMessageFr === "URL erronée" ? (
                    <>
                      {/* Wrong URL French Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        Cela peut être dû à un identificateur invalide ou à un
                        identificateur manquant. Que faire?
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            Essayez de cliquer à nouveau sur le lien depuis
                            votre courriel;
                          </p>
                        </li>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            Contactez nous à{" "}
                            <a
                              href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                              className="text-custom-blue-link underline"
                            >
                              experience@service.gc.ca
                            </a>{" "}
                            et nous vous aiderons.
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        Merci de votre patience.
                      </p>
                    </>
                  ) : errorMessageFr === "URL expirée" ? (
                    <>
                      {/* Expired URL French Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        Le problème peut être dû à une URL expirée si cela fait
                        plus de 24 heures que vous avez reçu le courriel
                        vérifier votre adresse de courrier électronique. Que
                        faire?
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            <Link href="/signup">
                              <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                                Inscrivez-vous
                              </a>
                            </Link>{" "}
                            de nouveau
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        Merci de votre patience.
                      </p>
                    </>
                  ) : (
                    /* General Error French Section */
                    <div className="flex">
                      <span className="error404-link" />
                      <p className="font-body text-sm leading-30px">
                        Retournez à la &nbsp;
                        <Link href="/fr">
                          <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                            page d'accueil [Service Canada Labs]
                          </a>
                        </Link>
                      </p>
                    </div>
                  )}
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
      {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
