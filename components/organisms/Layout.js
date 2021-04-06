import PropTypes from "prop-types";
import Head from "next/head";
import { ActionButton } from "../atoms/ActionButton";
import { SearchBar } from "../atoms/SearchBar";
import { Banner } from "../atoms/Banner";

export const Layout = ({
  bannerText,
  bannerTitle,
  children,
  bannerStartTestingText,
  bannerBecomeTesterText,
}) => {
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
              <a href="#">Français</a>
              <SearchBar
                placeholder={"Search Canada.ca"}
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
            <p>
              Experiencing an issue with this product or have you spotted an
              error?
            </p>
            <ActionButton
              text={"Report a problem"}
              secondary
              dataCyButton={"report-problem-button"}
            />
          </div>

          <ul>
            <li>
              <a href="#">Social media</a>
            </li>
            <li>
              <a href="#">Mobile applications</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
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
