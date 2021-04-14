import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the Alpha AlphaBanner on the page
 */

export const AlphaBanner = ({ text }) => {
  return (
    <div className="bg-gray-100">
      <div className="lg:container xxs:mx-0 xxs:px-0 lg:mx-auto lg:px-0 xxl:mx-auto">
        <div className="xxs:w-screen lg:w-2/3 xl:w-1/2 p-4">
          <div className="flex">
            <span className="max-h-9 uppercase border-2 border-black p-1 tracking-widest ml-2">
              Alpha
            </span>
            <span className="break-words ml-4 pt-2">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

AlphaBanner.propTypes = {
  /**
   * text area in the AlphaBanner
   */
  text: PropTypes.string.isRequired,
};

export default AlphaBanner;
