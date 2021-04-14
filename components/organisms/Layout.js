import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { SearchBar } from "../atoms/SearchBar";
import { Banner } from "../atoms/Banner";
import { AlphaBanner } from "../atoms/AlphaBanner";
import Link from "next/link";
import { useTranslation } from "next-i18next";

/**
 * Component which defines the layout of the page for all screen sizes
 */
export const Layout = ({
  alphaText,
  bannerText,
  bannerTitle,
  locale,
  langUrl,
  children,
}) => {
  const { t } = useTranslation("common");
  const language = locale === "en" ? "fr" : "en";

  return (
    <div className="overflow-x-hidden">
      <header>
        {alphaText ? <AlphaBanner text={alphaText} /> : null}
        <div className="layout-container">
          <a href="#">
            <img src="#" alt="Governement of Canada" />
            <span lang="en">Government of Canada </span>
            <span lang="fr">Gouvernment du Canada</span>
          </a>
        </div>

        <div className="layout-container">
          <Link key={language} href={langUrl} locale={language}>
            <a data-cy="toggle-language-link">
              {language === "en" ? "English" : "Français"}
            </a>
          </Link>
          <SearchBar
            placeholder={t("searchBarPlaceholder")}
            dataCy={"search-bar"}
          />
        </div>

        <nav className="layout-container">Menu</nav>
        {bannerText && bannerTitle ? (
          <Banner siteTitle={bannerTitle} headline={bannerText} />
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="layout-container mt-10">
        <div>
          <p>{t("footerReportProblem")}</p>
          <ActionButton
            text={t("footerReportProblemButtonString")}
            secondary
            dataCyButton={"report-problem-button"}
          />
        </div>

        <ul>
          <li>
            <a href="#" data-cy="social-media-link">
              {t("footerSocialMedia")}
            </a>
          </li>
          <li>
            <a href="#">{t("footerMobileApplications")}</a>
          </li>
          <li>
            <a href="#">{t("footerTermsAndConditions")}</a>
          </li>
          <li>
            <a href="#">{t("footerPrivacy")}</a>
          </li>
        </ul>

        <img src="#" alt="canada.jpg"></img>
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
};
