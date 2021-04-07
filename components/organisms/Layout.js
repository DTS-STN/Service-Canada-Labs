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
              headerLogoAltText="logo alt text"
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
          <div className="layout-container mt-10">
            <div>{children}</div>
          </div>
        </main>
      </div>

      <footer>
        <Footer
          privacyText="Privacy"
          reportBtnText="Report a problem"
          reportDescription="Experiencing an issue with this product or have you "
          reportDescriptionContinue="spotted an error?"
          footerLogoAltText="logo alt text"
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
        />
      </footer>
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
