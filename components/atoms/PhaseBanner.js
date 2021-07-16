import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, children }) => {
  return (
    <div className="bg-circle-color">
      <div className="block sm:flex py-4 layout-container">
        <span className="font-body text-xs text-circle-color font-extrabold flex-shrink-0 bg-white px-4 py-1 my-auto leading-6">
          {phase}
        </span>
        <p className="font-body text-xs mt-5 sm:mt-auto text-white sm:ml-4 pt-1 my-auto lg:pb-1">
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
