import React from "react";
import PropTypes from "prop-types";

/**
 * Displays an experiment card on the page
 */

export const Experiment = (props) => {
  const tagColours = {
    active: "custom-blue-experiment-blue",
    coming_soon: "gray-experiment",
    alpha: "custom-blue-experiment-blue",
  };
  return (
    <div
      className={`shadow-experiment-shadow p-4 border-b-4 h-400px ${
        "border-" + (tagColours[props.tag] || "gray-experiment")
      }`}
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
      tabIndex="0"
    >
      <h2 className="mb-2 text-p">{props.title}</h2>
      <span
        className={`inline-block py-2 px-2 uppercase font-body text-xxs text-white font-bold rounded ${
          "bg-" + (tagColours[props.tag] || "gray-experiment")
        }`}
      >
        {props.tagLabel}
      </span>
      <p className="mt-2 text-sm">{props.description}</p>
    </div>
  );
};

Experiment.propTypes = {
  /**
   * Title of the experiment card.
   */
  title: PropTypes.string.isRequired,

  /**
   * tag of the experiment card
   */
  tag: PropTypes.string.isRequired,

  /**
   * the label of the tag card
   */
  tagLabel: PropTypes.string.isRequired,

  /**
   * Description of the experiment card.
   */
  description: PropTypes.string.isRequired,

  /**
   * the test id for unit tests
   */
  dataTestId: PropTypes.string,

  /**
   * the test id for cypress test
   */
  dataCy: PropTypes.string,
};

export default Experiment;
