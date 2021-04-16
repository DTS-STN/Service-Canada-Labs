import PropTypes from "prop-types";

import { SearchBar } from "../atoms/SearchBar";
import { useState } from "react";

export function Header(props) {
  //State for Search input
  const [searchText, setSearchText] = useState(null);

  //Handler for search input
  function handleInputChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="w-full flex  h-auto flex-col mt-8 lg:flex lg:flex-row  xl:flex xl:flex-row   justify-between ">
      <div className="mb-4">
        <img
          className="h-auto xs:h-8 sm:h-8 md:h-8 lg:h-7 xl:h-8 w-auto "
          src={props.headerLogoImage}
          alt={props.headerLogoAltText}
        />
      </div>
      <div className="xl:w-4/12 mt-4 lg:mt-0 ">
        <SearchBar
          placeholder={"Search Canada.ca"}
          onChange={handleInputChange}
          dataCy={"search-bar"}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  /**
   * header logo alt text
   */
  headerLogoAltText: PropTypes.string.isRequired,
  /**
   * header image path
   */
  headerLogoImage: PropTypes.string.isRequired,
};
