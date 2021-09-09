import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Displays an experiment card on the page
 */

export const Experiment = (props) => {
  const tagColours = {
    current_projects: "green",
    past_projects: "gray",
    upcoming_projects: "blue",
  };
  return (
    <div
      className={`shadow-experiment-shadow p-6 border-b-4 xl:min-h-250px ${
        "border-" + (tagColours[props.tag] || "gray-experiment")
      }`}
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
    >
      <Link href={props.href}>
        <a
          className="flex block text-p text-custom-blue-projects-link underline hover:opacity-70"
          tabIndex="0"
        >
          {props.title}
          {props.href.substring(0, 8) === "https://" ? (
            <img src="/external-link.svg" className="px-1 py-2" />
          ) : undefined}
        </a>
      </Link>
      <span
        className={`block w-max py-2 px-2 my-4 font-body font-bold border-l-4 ${
          "border-" + (tagColours[props.tag] || "gray-experiment") + "-600"
        } ${"bg-" + (tagColours[props.tag] || "gray-experiment") + "-100"}`}
      >
        {props.tagLabel}
      </span>
      <p className="mt-2 leading-30px text-lg">{props.description}</p>
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
   * Link of the card
   */
  href: PropTypes.string,

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
