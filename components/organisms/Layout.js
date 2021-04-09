import PropTypes from "prop-types";
import Head from "next/head";
import { ActionButton } from "../atoms/ActionButton";
import { Banner } from "../atoms/Banner";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

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
            <Header
              headerLogoAltText="Symbol of the Government of Canada"
              headerLogoImage="/sig-blk-en.svg"
            />
          </div>
          <div className="mb-2 border-t pb-2 mt-4"></div>
          <nav className="layout-container ">Menu</nav>
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
          <div className="layout-container mt-10 mb-4">
            <div>{children}</div>
          </div>
        </main>
        <footer>
          <Footer
            footerLogoAltText="Symbol of the Government of Canada"
            footerLogoImage="/wmms-blk.svg"
            links={[
              {
                link: "https://www.canada.ca",
                linkText: "Social media",
              },
              {
                link: "https://www.canada.ca",
                linkText: "Mobile applications",
              },
              {
                link: "https://www.canada.ca/en/transparency/terms.html",
                linkText: "Terms and conditions",
              },
              {
                link: "https://www.canada.ca/en/transparency/terms.html",
                linkText: "Privacy",
              },
            ]}
            footerBoxLinks={[
              {
                footerBoxlink:
                  "https://www.canada.ca/en/revenue-agency/corporate/contact-information.html",
                footerBoxLinkText: "Contact us",
              },
              {
                footerBoxlink: "https://www.canada.ca/en/news.html",
                footerBoxLinkText: "News",
              },
              {
                footerBoxlink: "https://pm.gc.ca/en",
                footerBoxLinkText: "Prime Minister",
              },
              {
                footerBoxlink: "https://www.canada.ca/en/government/dept.html",
                footerBoxLinkText: "Departments and agencies",
              },

              {
                footerBoxlink:
                  "https://www.canada.ca/en/government/system/laws.html",
                footerBoxLinkText: "Treaties, laws and regulations",
              },
              {
                footerBoxlink:
                  "https://www.canada.ca/en/government/system.html",
                footerBoxLinkText: "How goverment works",
              },
              {
                footerBoxlink:
                  "https://www.canada.ca/en/government/publicservice.html",
                footerBoxLinkText: "Public service and military",
              },
              {
                footerBoxlink:
                  "https://www.canada.ca/en/transparency/reporting.html",
                footerBoxLinkText: "Goverment-wide reporting",
              },
              {
                footerBoxlink: "https://open.canada.ca/en",
                footerBoxLinkText: "Open Goverment",
              },
            ]}
          ></Footer>
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
