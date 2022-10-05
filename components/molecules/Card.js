import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { ActionButton } from "../atoms/ActionButton";

/**
 * Displays an experiment card on the page
 */

export const Card = (props) => {
  const tagColours = {
    current_projects: "custom-green",
    past_projects: "custom-gray",
    upcoming_projects: "custom-blue",
  };

  return (
    <div
      className={`${
        props.blog
          ? "card-shadow border border-custom-gray-border rounded-md px-4 py-2 pb-4 mb-8"
          : props.isExperiment
          ? "shadow-experiment-shadow -ml-8"
          : ""
      } ${"border-" + (tagColours[props.tag] || "gray-experiment")} min-w-full`}
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
      style={{
        maxWidth: "557px",
      }}
    >
      {!props.blog ? (
        <div className="mb-4">
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
      ) : undefined}
      <h2>
        {props.blog ? (
          <div>
            <Link href={props.href}>
              <a className="text-canada-footer-font text-lg underline">
                {props.title}
              </a>
            </Link>
            <p className="text-base text-custom-gray-date">
              {"Posted: " + props.datePosted.substring(0, 10)}
            </p>
          </div>
        ) : props.isExperiment ? (
          <Link href={props.href}>
            <a
              className="flex block text-p text-custom-blue-projects-link underline hover:opacity-70 px-4 items-center"
              tabIndex="0"
            >
              {props.title}
              {props.href.substring(0, 8) === "https://" ? (
                <div className="h-4 w-4 ml-1 mt-1 relative">
                  <img src={props.icon} alt={props.iconAlt} />
                </div>
              ) : undefined}
            </a>
          </Link>
        ) : (
          props.title
        )}
      </h2>
      {props.isExperiment ? (
        <span
          className={`block w-max py-2 px-2 my-4 font-body font-bold border-l-4 ml-4 ${
            "border-" + (tagColours[props.tag] || "gray-experiment") + "-darker"
          } ${
            "bg-" + (tagColours[props.tag] || "gray-experiment") + "-lighter"
          }`}
        >
          {props.tagLabel}
        </span>
      ) : undefined}
      <p
        className={`${
          props.blog
            ? "text-custom-gray-text"
            : props.isExperiment
            ? "ml-4 mb-4"
            : ""
        } mt-2 leading-30px text-lg`}
      >
        {props.description}
      </p>
      {!props.isExperiment && !props.blog ? (
        <ActionButton
          href={props.btnHref}
          text={props.btnText}
          id={props.btnId}
          dataCy={props.btnId}
          className="flex mt-6 mb-2 rounded xxs:w-full xs:w-fit py-2 bg-[#EAEBED] text-custom-blue-text focus:ring-inset focus:ring-2 focus:ring-black hover:bg-details-button-hover-gray text-center border border-details-button-gray"
        />
      ) : undefined}
    </div>
  );
};

Card.propTypes = {
  /**
   * Title of the experiment card.
   */
  title: PropTypes.string.isRequired,

  /**
   * tag of the experiment card
   */
  tag: PropTypes.string,

  /**
   * Link of the card
   */
  href: PropTypes.string,

  /**
   * the label of the tag card
   */
  tagLabel: PropTypes.string,

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

export default Card;
