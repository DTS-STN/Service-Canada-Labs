import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { ActionButton } from "../atoms/ActionButton";
import Image from "next/image";

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
    <Link href={props.href}>
      <div
        className={`group card-shadow border border-custom-gray-border rounded-md pb-4 hover:cursor-pointer ${
          "border-" + (tagColours[props.tag] || "gray-experiment")
        }`}
        data-testid={props.dataTestId}
        data-cy={props.dataCy}
      >
        {props.showImage ? (
          <div className="h-80 flex justify-center">
            <img
              src={props.imgSrc}
              alt={props.imgAlt}
              className="xxl:mt-4 mb-4 object-cover rounded-md"
            />
          </div>
        ) : (
          ""
        )}
        <h2>
          <a
            className="block mt-4 text-lg text-custom-blue-projects-link underline px-4 items-center group-hover:no-underline group-hover:text-custom-blue-projects-link-hover"
            tabIndex="0"
          >
            {props.title}
            {props.showIcon ? (
              props.href.substring(0, 8) === "https://" ? (
                <div className="h-4 w-4 ml-1 mt-1 relative">
                  <img src={props.icon} alt={props.iconAlt} />
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </a>
          {props.showDate ? (
            <p className="ml-4 text-base text-custom-gray-date">
              {"Posted: " + props.datePosted.substring(0, 10)}
            </p>
          ) : (
            ""
          )}
        </h2>
        {props.showTag ? (
          <span
            className={`block w-max py-2 px-2 my-4 font-body font-bold border-l-4 ml-4 ${
              "border-" +
              (tagColours[props.tag] || "gray-experiment") +
              "-darker"
            } ${
              "bg-" + (tagColours[props.tag] || "gray-experiment") + "-lighter"
            }`}
          >
            {props.tagLabel}
          </span>
        ) : (
          ""
        )}
        <p className="text-custom-gray-text mx-4 leading-30px text-lg">
          {props.description}
        </p>
        {props.showButton ? (
          <ActionButton
            href={props.btnHref}
            text={props.btnText}
            id={props.btnId}
            dataCy={props.btnId}
            className="flex mt-6 mb-2 ml-4 rounded xxs:w-full xs:w-fit py-2 bg-[#EAEBED] text-custom-blue-text focus:ring-inset focus:ring-2 focus:ring-black hover:bg-details-button-hover-gray text-center border border-details-button-gray"
          />
        ) : (
          ""
        )}
      </div>
    </Link>
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

  /**
   * Boolean value to show or hide image
   */
  showImage: PropTypes.bool,

  /**
   * Boolean value to show or hide button
   */
  showButton: PropTypes.bool,

  /**
   * Boolean value to show or hide date
   */
  showDate: PropTypes.bool,

  /**
   * Boolean value to show or hide icon beside title
   */
  showIcon: PropTypes.bool,

  /**
   * Boolean value to show or hide tag
   */
  showTag: PropTypes.bool,
};

export default Card;
