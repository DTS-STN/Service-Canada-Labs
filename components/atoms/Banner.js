import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the banner on the page
 */

export const Banner = ({ siteTitle, headLine }) => {
  return (
    <div title="Banner image." className="bg-banner-img py-8 md:px-8">
      <div className="container w-full md:w-3/4 xl:w-1/2 bg-dk-blue bg-opacity-90 text-white p-4">
        <h1 className="text-4xl pt-4 pb-2">{siteTitle}</h1>
        <hr className="border-2 border-red-600 bg-red-600 border-opacity-90 w-3/4" />
        <p className="text-2xl py-4">{headLine}</p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  /**
   * Text area that displays the title for the page
   */
  siteTitle: PropTypes.string.isRequired,

  /**
   * This is for adding an id for testing in cypress
   */
  headLine: PropTypes.string.isRequired,
};

export default Banner;
