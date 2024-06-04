import PropTypes from "prop-types";
import { Banner } from "../atoms/Banner";
import { PhaseBanner } from "./PhaseBanner";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { DateModified } from "../atoms/DateModified";
import { Breadcrumb } from "../atoms/Breadcrumb";
import { Footer } from "../organisms/Footer";
import Feedback from "./Feedback";
import { TopNavBar } from "../molecules/TopNavBar";

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
  excludeFooterFeedback,
  preFooterTitle,
  preFooterLink,
  preFooterLinkText,
  dateModifiedOverride,
}) => {
  const { t } = useTranslation("common");
  const language = locale === "en" ? "fr" : "en";
  path =
    typeof window !== "undefined" && window.location.origin
      ? window.location.href
      : "";
  const isTopNavBarActive = true;

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
        <div className="layout-container lg:max-w-full pt-4 pb-3 !mx-0 !px-5 flex-col flex lg:flex lg:flex-row justify-between bg-custom-gray-lightest">
          <div
            className="flex flex-row justify-between"
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
                className="max-w-[280px]"
              />
            </a>
            <h3 className="sr-only">{t("languageSelection")}</h3>
            <Link
              key={language}
              href={langUrl}
              locale={language}
              data-testid="languageLink1"
              className="block lg:hidden ml-6 -mt-1 sm:ml-16 underline underline-offset-[6px] font-body text-canada-footer-font lg:text-sm text-lg hover:text-canada-footer-hover-font-blue"
            >
              {language === "en" ? "EN" : "FR"}
            </Link>
          </div>
          <div className="flex flex-col justify-center">
            <Link
              key={language}
              href={langUrl}
              locale={language}
              data-testid="languageLink3"
              className="flex lg:block hidden underline underline-offset-[5px] font-body text-canada-footer-font hover:text-canada-footer-hover-font-blue"
              data-cy="toggle-language-link"
              lang={language}
            >
              {language === "en" ? "English" : "Français"}
            </Link>
          </div>
        </div>
        <div className="border-b-[3px] border-multi-blue-blue35" />
        {isTopNavBarActive ? (
          <TopNavBar
            homeLink={t("topNavBar.homeLink")}
            homeLinkLabel={t("topNavBar.homeLinkLabel")}
            updatesLink={t("topNavBar.updatesLink")}
            updatesLinkLabel={t("topNavBar.updatesLinkLabel")}
            projectsLink={t("topNavBar.projectsLink")}
            projectsLinkLabel={t("topNavBar.projectsLinkLabel")}
            navAriaLabel={t("topNavBar.ariaLabel")}
            buttonAriaLabel={t("topNavBar.buttonAriaLabel")}
          />
        ) : null}
        <div className="layout-container mt-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </header>

      {bannerText && bannerTitle ? (
        <Banner siteTitle={bannerTitle} headline={bannerText} />
      ) : null}
      {children}
      <div className="mt-12">
        <h2 className="sr-only">{t("siteFooter")}</h2>
        {!excludeFooterFeedback ? (
          <div className="layout-container mt-5">
            <Feedback />
          </div>
        ) : (
          ""
        )}
        <div className="layout-container mb-2">
          <DateModified date={dateModifiedOverride} />
        </div>
      </div>

      <Footer
        id="footer"
        lang={locale}
        btnLink={"#"}
        preFooterTitle={preFooterTitle}
        preFooterLink={preFooterLink}
        preFooterLinkText={preFooterLinkText}
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
   * Boolean that determines whether the footer feedback is shown or not
   */
  excludeFooterFeedback: PropTypes.bool,
  /**
   * Title for the pre-footer
   */
  preFooterTitle: PropTypes.string,
  /**
   * URL for the pre-footer link
   */
  preFooterLink: PropTypes.string,
  /**
   * Text for the pre-footer link
   */
  preFooterLinkText: PropTypes.string,
  /**
   * Manual override for date modified component
   */
  dateModifiedOverride: PropTypes.string,
};
