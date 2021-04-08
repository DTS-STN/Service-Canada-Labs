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
      <div className="w-full h-auto flex  md:flex-row justify-center  mt-4">
        <div className="w-full flex  flex-col  lg:flex-col  xl:flex-row   justify-between relative">
          <div className="md:h-9 h-6 mb-4">
            <Image
              className="h-full  bottom-0 left-0"
              width={300}
              height={80}
              src={props.headerLogoImage}
              alt={props.headerLogoAltText}
            />
          </div>

          <div className="mt-2 ">
            <SearchBar
              placeholder={"Search Canada.ca"}
              onChange={handleInputChange}
              dataCy={"search-bar"}
            />
          </div>
        </div>
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
