import PropTypes from "prop-types";
import { Banner } from "../atoms/Banner";
// import { Footer } from "@dts-stn/service-canada-design-system";
import { PhaseBanner } from "./PhaseBanner";
import { ReportAProblem } from "./ReportAProblem";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { DateModified } from "../atoms/DateModified";
import { Breadcrumb } from "../atoms/Breadcrumb";

import { Footer } from "../design-system/Footer";
import Feedback from "./Feedback";

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
      <nav className="skip-main" aria-label={t("skipToMainContentBtn")}>
        <a
          id="skipToMainContent"
          className="bg-white text-custom-blue-dark text-lg underline py-1 px-2 focus:outline-dark-goldenrod hover:bg-gray-dark"
          href="#pageMainTitle"
          data-cy-button={"skip-Content"}
          draggable="false"
          aria-label={t("skipToMainContentBtn")}
        ></a>
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
              <img
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
              className="visible lg:invisible ml-6 sm:ml-16 underline font-body font-bold text-canada-footer-font lg:text-sm text-base hover:text-canada-footer-hover-font-blue"
            >
              {language === "en" ? "EN" : "FR"}
            </Link>
          </div>
          <div className="flex-col flex">
            <Link
              key={language}
              href={langUrl}
              locale={language}
              data-testid="languageLink3"
              className="lg:visible invisible pb-0 lg:pb-2 self-end underline font-body text-canada-footer-font hover:text-canada-footer-hover-font-blue"
              data-cy="toggle-language-link"
              lang={language}
            >
              {language === "en" ? "English" : "Français"}
            </Link>
          </div>
        </div>

        <div className="border-t pb-2 mt-4">
          <div className="layout-container mt-10 mb-2">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </header>

      <main>
        {bannerText && bannerTitle ? (
          <Banner siteTitle={bannerTitle} headline={bannerText} />
        ) : null}
        <div>{children}</div>
        <div className="mt-12">
          <h2 className="sr-only">{t("siteFooter")}</h2>
          <div className="layout-container mt-5">
            <Feedback />
            <ReportAProblem />
          </div>
          <div className="layout-container mb-2">
            <DateModified date={dateModifiedOverride} />
          </div>
        </div>
      </main>

      <Footer
        id="footer"
        lang={locale}
        btnLink={"#"}
        brandLinks={[
          {
            id: "link1",
            text: t("footerSocialMedia"),
            href: t("footerSocialMediaURL"),
          },
          {
            id: "link2",
            text: t("footerMobileApp"),
            href: t("footerMobileAppURL"),
          },
          {
            id: "link3",
            text: t("footerTermsAndCondition"),
            href: t("footerTermsAndConditionURL"),
          },
          {
            id: "link4",
            text: t("footerPrivacy"),
            href: t("footerPrivacyURL"),
          },
        ]}
      />
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
