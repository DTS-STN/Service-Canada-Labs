import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, children }) => {
  return (
    <div className="bg-gray-100 sm:max-h-14">
      <div className="flex items-start py-4 layout-container">
        <span className="font-body text-xs leading-5 sm:text-sm sm:leading-5 uppercase tracking-normal border-2 border-black px-2">
          {phase}
        </span>
        <p className="font-body text-xxs sm:text-xs break-words ml-4 pt-1">
          {children}
        </p>
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
