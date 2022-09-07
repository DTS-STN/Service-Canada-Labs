import PropTypes from "prop-types";
import { Banner } from "../atoms/Banner";
import { Footer } from "./Footer";
import { PhaseBanner } from "./PhaseBanner";
import { ReportAProblem } from "./ReportAProblem";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { DateModified } from "../atoms/DateModified";
import { Breadcrumb } from "../atoms/Breadcrumb";
import Image from "next/image";

/**
 * Component which defines the layout of the page for all screen sizes
 */
export const Layout = ({
  bannerText,
  bannerTitle,
  children,
  locale,
  langUrl,
  breadcrumbItems,
  feedbackActive,
  showDisclaimer,
  projectName,
  path,
  dateModifiedOverride,
}) => {
  const { t } = useTranslation("common");
  const language = locale === "en" ? "fr" : "en";
  path =
    typeof window !== "undefined" && window.location.origin
      ? window.location.href
      : "";

  return (
    <div className="overflow-x-hidden">
      <nav className="skip-main">
        <a
          id="skipToMainContent"
          className="bg-white text-custom-blue-dark text-lg underline py-1 px-2 focus:outline-dark-goldenrod hover:bg-gray-dark"
          href="#pageMainTitle"
          data-cy-button={"skip-Content"}
          draggable="false"
        >
          {t("skipToMainContentBtn")}
        </a>
      </nav>
      <header>
        <h2 className="sr-only">{t("globalHeader")}</h2>
        <h3 className="sr-only">{t("testSiteNotice")}</h3>
        {showDisclaimer ? (
          <PhaseBanner
            phase={t("phaseBannerTag")}
            feedbackActive={feedbackActive}
            text={t("phaseBannerText")}
            projectName={projectName}
            path={path}
          />
        ) : (
          ""
        )}
        <div className="layout-container flex-col flex lg:flex lg:flex-row justify-between  mt-2">
          <div
            className="flex flex-row justify-between items-center lg:mt-7 mt-1.5"
            role="navigation"
            aria-labelledby="officialSiteNav"
          >
            <h3 className="sr-only" id="officialSiteNav">
              {t("officialSiteNavigation")}
            </h3>
            <a href="https://www.canada.ca">
              <Image
                src={language === "en" ? "/sig-blk-fr.svg" : "/sig-blk-en.svg"}
                alt={t("symbol")}
                width="375"
                height="35"
              />
            </a>
            <h3 className="sr-only">{t("languageSelection")}</h3>
            <Link
              key={language}
              href={langUrl}
              locale={language}
              data-testid="languageLink1"
            >
              <a className="visible lg:invisible ml-6 sm:ml-16 underline font-body font-bold text-canada-footer-font lg:text-sm text-base hover:text-canada-footer-hover-font-blue">
                {language === "en" ? "EN" : "FR"}
              </a>
            </Link>
          </div>
          <div className="flex-col flex">
            <Link
              key={language}
              href={langUrl}
              locale={language}
              data-testid="languageLink2"
            >
              <a
                className="lg:visible invisible pb-0 lg:pb-2 self-end underline font-body text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                data-cy="toggle-language-link"
                data-testid="languageLink3"
                lang={language}
              >
                {language === "en" ? "English" : "Français"}
              </a>
            </Link>
          </div>
        </div>

        <div className="mb-2 border-t pb-2 mt-4">
          <div className="layout-container mt-10 mb-12">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </header>

      <main>
        {bannerText && bannerTitle ? (
          <Banner siteTitle={bannerTitle} headline={bannerText} />
        ) : null}
        <div>{children}</div>
      </main>

      <footer>
        <h2 className="sr-only">{t("siteFooter")}</h2>
        <div className="layout-container mt-5">
          <ReportAProblem />
        </div>
        <div className="layout-container mb-2">
          <DateModified date={dateModifiedOverride} />
        </div>
        <Footer
          footerLogoAltText={t("symbol2")}
          footerLogoImage="/wmms-blk.svg"
          footerNav1={t("aboutGovernment")}
          footerNav2={t("aboutThisSite")}
          links={[
            {
              link: t("footerSocialMediaURL"),
              linkText: t("footerSocialMedia"),
            },
            {
              link: t("footerMobileAppURL"),
              linkText: t("footerMobileApp"),
            },
            {
              link: t("footerTermsAndConditionURL"),
              linkText: t("footerTermsAndCondition"),
            },
            {
              link: t("footerPrivacyURL"),
              linkText: t("footerPrivacy"),
            },
          ]}
          footerBoxLinks={[
            {
              footerBoxlink: t("footerContactUsURL"),
              footerBoxLinkText: t("footerContactUs"),
            },
            {
              footerBoxlink: t("footerNewsURL"),
              footerBoxLinkText: t("footerNews"),
            },
            {
              footerBoxlink: t("footerPmURL"),
              footerBoxLinkText: t("footerPm"),
            },
            {
              footerBoxlink: t("footerDepartmentAgenciesURL"),
              footerBoxLinkText: t("footerDepartmentAgencies"),
            },

            {
              footerBoxlink: t("footerTreatiesURL"),
              footerBoxLinkText: t("footerTreaties"),
            },
            {
              footerBoxlink: t("footerHowGovWorksURL"),
              footerBoxLinkText: t("footerHowGovWorks"),
            },
            {
              footerBoxlink: t("footerPublicServiceURL"),
              footerBoxLinkText: t("footerPublicService"),
            },
            {
              footerBoxlink: t("footerGovReportingURL"),
              footerBoxLinkText: t("footerGovReporting"),
            },
            {
              footerBoxlink: t("footerOpenGovURL"),
              footerBoxLinkText: t("footerOpenGov"),
            },
          ]}
          topOfPage={t("topOfPage")}
        />
      </footer>
    </div>
  );
};

Layout.propTypes = {
  /**
   * text for the banner
   */
  bannerText: PropTypes.string,

  /**
   * title of the banner
   */
  bannerTitle: PropTypes.string,

  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * currently active locale
   */
  locale: PropTypes.string,

  /**
   * URL to use for navigation when changing locales
   */
  langUrl: PropTypes.string,

  /**
   * Array of Items for the breadcrumb
   */
  breadcrumbItems: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text for the breadcrumb
       */
      text: PropTypes.string,

      /**
       * Link for the breadcrumb
       */
      link: PropTypes.string,
    })
  ),

  /**
   * For activating feedback on active projects pages
   */
  feedbackActive: PropTypes.bool,
  /**
   * Boolean that determines whether the disclaimer at the top of the screen is shown or not
   */
  showDisclaimer: PropTypes.bool,
  /**
   * Project/page name that feedback is coming from
   */
  projectName: PropTypes.string,
  /**
   * Path that the feedback is coming from
   */
  path: PropTypes.string,
  /**
   * Manual override for date modified component
   */
  dateModifiedOverride: PropTypes.string,
};
