import Head from "next/head";
import Banner from "../components/atoms/Banner.js";
import { ActionButton } from "../components/atoms/ActionButton";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";

export default function Home() {
  return (
    <div>
      <main>
        <Head>
          <title>Alpha Site</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header
          headerLogoAltText="logo alt text"
          headerLogoImage="/sig-blk-en.svg"
        />
        {/* <header>
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
            onChange={handleInputChange}
            dataCy={"search-bar"}
          />
        </div>

        <nav>Menu</nav>
      </header> */}

        <section>
          <div>
            <Banner
              siteTitle="Service Canada Labs"
              headline="Make government work for you."
            />
            <div className={"flex"}>
              <ActionButton
                text={"Become a tester"}
                secondary
                className={"mr-4"}
                dataCyButton={"become-tester-button"}
              />
              <ActionButton
                text={"Start testing"}
                dataCyButton={"start-testing-button"}
              />
            </div>
          </div>
        </section>

        <section>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            consectetur urna nec tempor tristique. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Nulla at
            condimentum odio, quis porttitor eros. Quisque laoreet pretium
            purus, sed maximus turpis. Quisque ut magna vel dui placerat aliquet
            in non orci.
          </p>

          <figure>Block</figure>

          <figure>
            Block
            <figcaption>
              Diagram that shows what we do and how user feedback gets
              transformed in to a service to Canadians - and/or - Benefits of
              joining the user pool for testers
            </figcaption>
          </figure>
        </section>

        <section>
          <h3>Contact us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            consectetur urna nec tempor tristique.
          </p>
          <a href="#">john.doe@example.com</a>
          <figure>Block</figure>
        </section>

        <section>
          <h4>Featured prototypes</h4>
          <figure>Block</figure>
          <figure>Block</figure>
          <figure>Block</figure>
        </section>

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
      </main>
    </div>
  );
}
