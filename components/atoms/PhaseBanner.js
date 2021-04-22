import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, children }) => {
  return (
    <div className="bg-gray-100 sm:max-h-14">
      <div className="xxs:w-screen xxs:mx-0 xxs:px-0 lg:container  lg:mx-auto lg:px-0 xxl:mx-auto">
        <div className="flex items-start p-4">
          <span className="font-body text-sm leading-5 uppercase tracking-normal border-2 border-black px-2 lg:ml-2">
            {phase}
          </span>
          <span className="font-body text-xs break-words ml-4 pt-1">
            {children}
          </span>
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
