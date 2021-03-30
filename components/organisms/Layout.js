import PropTypes from "prop-types";
import Head from "next/head";
import { ActionButton } from "../atoms/ActionButton";
import { SearchBar } from "../atoms/SearchBar";
import { useState } from "react";

export const Layout = ({ banner, children }) => {
  //State for Search input
  const [searchText, setSearchText] = useState(null);

  //Handler for search input
  function handleInputChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <>
      <Head>
        <title>Alpha Site</title>
      </Head>
      <header>
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
      </header>
      {banner}
      <div className="xxs:mx-2 sm:mx-12 lg:mx-24 xl:mx-48 mt-10">
        {children}
      </div>
      <footer className="mt-10">
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
    </>
  );
};

Layout.propTypes = {
  // Optional banner element outside default margins
  banner: PropTypes.element,
  // Layout children elements
  children: PropTypes.element,
};
