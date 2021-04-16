import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, children }) => {
  return (
    <div className="bg-gray-100 sm:max-h-14">
      <div className="lg:container xxs:mx-0 xxs:px-0 lg:mx-auto lg:px-0 xxl:mx-auto">
        <div className="xxs:w-screen lg:w-2/3 xl:w-1/2 p-4">
          <div className="flex items-start text-xxxs xs:text-xxs sm:text-xs">
            <span className="uppercase tracking-widest border-2 border-black px-1 pt-1 pb-0.5 xs:pt-0.5 sm:px-2 lg:ml-2">
              {phase}
            </span>
            <span className="break-words ml-4 pt-1">{children}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

PhaseBanner.propTypes = {
  /**
   * Phase stage in the PhaseBanner
   */
  phase: PropTypes.string.isRequired,
  /**
   * Phase stage in the PhaseBanner
   */
  children: PropTypes.string.isRequired,
};

export default PhaseBanner;
