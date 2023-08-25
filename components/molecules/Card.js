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
    new_update: "new-update",
  };

  const tagColour = tagColours[props.tag] ?? "custom-gray";

  return (
    <Link href={props.href}>
      <div
        className={`group card-shadow border border-custom-gray-border rounded-md pb-4 hover:cursor-pointer ${
          "border-" + tagColour
        }`}
        data-testid={props.dataTestId}
        data-cy={props.dataCy}
      >
        {props.showImage ? (
          <div className="h-80 flex justify-center">
            <img
              src={props.imgSrc}
              alt={props.imgAlt}
              className="object-contain rounded-md"
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex">
          <p className="block font-display text-lg text-custom-blue-projects-link font-bold underline underline-offset-4 my-1 py-2 px-6 items-center group-hover:no-underline group-hover:text-custom-blue-projects-link-hover">
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
          </p>
          {props.showTag ? (
            <span
              className={`block w-max py-2 px-2 font-body font-bold border-l-4 mr-6 mt-auto mb-auto border-${tagColour}-darker bg-${tagColour}-lighter
              `}
            >
              {props.tagLabel}
            </span>
          ) : (
            ""
          )}
        </div>
        {props.showDate ? (
          <p className="ml-6 text-base text-custom-gray-date">
            {"Posted: " + props.datePosted.substring(0, 10)}
          </p>
        ) : (
          ""
        )}
        <p className="text-custom-gray-text mx-6 leading-30px text-lg">
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
