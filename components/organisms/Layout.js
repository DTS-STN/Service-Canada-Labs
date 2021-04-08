import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { SearchBar } from "../atoms/SearchBar";
import { Banner } from "../atoms/Banner";
import Link from "next/link";
import { useRouter } from "next/router";
import { useI18n } from "next-rosetta";

/**
 * Component which defines the layout of the page for all screen sizes
 */
export const Layout = ({ bannerText, bannerTitle, children }) => {
  const { locale, locales, asPath } = useRouter(); // Get current locale and locale list
  const { t } = useI18n();
  const language = locale === "en" ? "fr" : "en";

  return (
    <div className="overflow-x-hidden">
      <header>
        <div className="layout-container">
          <a href="#">
            <img src="#" alt="Governement of Canada" />
            <span lang="en">Government of Canada </span>
            <span lang="fr">Gouvernment du Canada</span>
          </a>
        </div>

        <div className="layout-container">
          <Link key={language} href={asPath} locale={language}>
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
            <a href="#">{t("footerSocialMedia")}</a>
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
};
