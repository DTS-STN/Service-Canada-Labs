import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the banner on the page
 */

export const Banner = ({ siteTitle, headline }) => {
  return (
    <div className="bg-banner-img-mobile bg-center bg-cover py-8 sm:bg-banner-img sm:bg-right">
      <div className="lg:container xxs:mx-0 xxs:px-0 lg:mx-auto lg:px-6 xxl:mx-auto">
        <div className="bg-black bg-opacity-90 text-white p-4 xxs:w-screen lg:bg-opacity-30 lg:w-2/3 xl:w-1/2">
          <h1
            className="text-h1 font-medium pt-4 pb-2 break-words"
            id="pageMainTitle"
            tabIndex="-1"
          >
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
