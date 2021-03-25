import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the banner on the page
 */

export const Banner = ({ siteTitle, headline }) => {
  return (
    <div title="Banner image." className="bg-banner-img py-8 md:px-8">
      <div className="md:container w-full md:w-3/4 xl:w-1/2 bg-dk-blue bg-opacity-90 text-white p-4">
        <h1 className="font-display font-bold text-h1 pt-4 pb-2 break-words">
          {siteTitle}
        </h1>
        <hr className="border-2 border-hr-red-bar bg-hr-red-bar bg-opacity-90 border-opacity-90 w-3/4" />
        <p className="font-body font-bold text-p py-4 break-words">
          {headline}
        </p>
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
   * text area for headline in the banner
   */
  headline: PropTypes.string.isRequired,
};

export default Banner;
