import PropTypes from "prop-types";
import Head from "next/head";
import { ActionButton } from "../atoms/ActionButton";
import { SearchBar } from "../atoms/SearchBar";
import { Banner } from "../atoms/Banner";
import Link from "next/link";
import { useRouter } from "next/router";
import { useI18n } from "next-rosetta";

export const Layout = ({
  bannerText,
  bannerTitle,
  children,
  bannerStartTestingText,
  bannerBecomeTesterText,
}) => {
  const { locale, locales, asPath } = useRouter(); // Get current locale and locale list
  const { t } = useI18n();
  const language = locale === "en" ? "fr" : "en";

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="overflow-x-hidden">
        <header>
          <div className="layout-container ">
            <div>
              <a href="#">
                <img src="#" alt="Governement of Canada "></img>
                <span lang="en">Government of Canada </span>
                <span lang="fr">Gouvernment du Canada</span>
              </a>
            </div>

            <div>
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

            <nav>Menu</nav>
          </div>
          {bannerText && bannerTitle ? (
            <section>
              <Banner siteTitle={bannerTitle} headline={bannerText} />
              <div className="bg-gray-light-200 py-6">
                <div className={"flex layout-container "}>
                  <ActionButton
                    text={bannerBecomeTesterText}
                    secondary
                    className={"mr-4"}
                    dataCyButton={"become-tester-button"}
                  />
                  <ActionButton
                    text={bannerStartTestingText}
                    dataCyButton={"start-testing-button"}
                  />
                </div>
              </div>
            </section>
          ) : null}
        </header>
        <main>
          <div className="layout-container mt-10">
            <div>{children}</div>
          </div>
        </main>
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
    </div>
  );
};

Layout.propTypes = {
  // Optional banner elements outside default margins
  bannerText: PropTypes.string,
  bannerTitle: PropTypes.string,
  bannerStartTestingText: PropTypes.string,
  bannerBecomeTesterText: PropTypes.string,

  // Layout children elements
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
