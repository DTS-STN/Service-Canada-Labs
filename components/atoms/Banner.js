import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the banner on the page
 */

export const Banner = ({ siteTitle, headline }) => {
  return (
    <div title="Home banner" className="bg-banner-img py-8">
      <div className="lg:container xxs:mx-0 xxs:px-0 lg:mx-auto lg:px-6 xxl:mx-auto">
        <div className="xxs:w-screen lg:w-2/3 xl:w-1/2 bg-dk-blue bg-opacity-90 text-white p-4">
          <h1 className="text-h1-xl font-medium pt-4 pb-2 break-words">
            {siteTitle}
          </h1>
          <hr className="border-2 border-hr-red-bar bg-hr-red-bar bg-opacity-90 border-opacity-90 w-3/4" />
          <p className="text-base font-normal py-4 break-words">{headline}</p>
        </div>
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
