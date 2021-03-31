import Head from "next/head";
import Banner from "../components/atoms/Banner.js";
import { ActionButton } from "../components/atoms/ActionButton";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";

export default function Home() {
  return (
    <div>
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
          <input type="search" placeholder="Search Canada.ca"></input>
        </div>

        <nav>Menu</nav>
      </header> */}

      <main>
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
                className={"w-36 mr-4"}
                dataCyButton={"become-tester-button"}
              />
              <ActionButton
                text={"Start testing"}
                className={"w-36"}
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
      </main>

      {/* <footer>
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
      </footer> */}
      <Footer
        socialMediaLink="https://www.canada.ca"
        socialMediaText="Social media"
        mobileLink="https://www.canada.ca"
        mobileText="Mobile applications"
        termsAndConditionsLink="https://www.canada.ca/en/transparency/terms.html"
        termsAndConditionsText="Terms and conditions"
        privacyLink="https://www.canada.ca/en/transparency/terms.html"
        privacyText="Privacy"
        reportBtnText="Report a problem"
        reportDescription="Experiencing an issue with this product or have you "
        reportDescriptionContinue="spotted an error?"
        footerLogoAltText="logo alt text"
        footerLogoImage="/wmms-blk.svg"
      />
    </div>
  );
}
