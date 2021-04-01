import PropTypes from "prop-types";
import Image from "next/image";
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
    <div className="w-full  mt-6 ">
      <div className="w-full h-auto flex flex-col md:flex-row justify-center  mt-4">
        <div className="w-1/2  md:w-2/3 flex flex-col md:flex-row  justify-between relative">
          <div className="md:h-9 h-6 w-40 ">
            <Image
              className="h-full absolute bottom-0 left-0"
              layout="fill"
              src={props.headerLogoImage}
              alt={props.headerLogoAltText}
            />
          </div>
          <div>
            <SearchBar
              placeholder={"Search Canada.ca"}
              onChange={handleInputChange}
              dataCy={"search-bar"}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-black-500">
        <div className="mt-4"></div>
        <div className="mb-4"></div>
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
