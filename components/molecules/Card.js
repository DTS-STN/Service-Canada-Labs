import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { ActionButton } from "../atoms/ActionButton";
import Image from "next/image";

/**
 * Displays an experiment card on the page
 */

export const Card = (props) => {
  const { t } = useTranslation("common");
  const tagColours = {
    current_projects: "custom-green",
    past_projects: "custom-red",
    upcoming_projects: "custom-blue",
  };

  return (
    <div
      className={`${
        props.isExperiment ? "shadow-experiment-shadow" : ""
      } xl:min-h-250px -ml-8 w-fit ${
        "border-" + (tagColours[props.tag] || "gray-experiment")
      }`}
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
      style={{
        width: "560px",
        minWidth: "min-content",
      }}
    >
      <div
        className="bg-gray-300"
        style={{
          height: `${props.isExperiment ? "290px" : "326px"}`,
          position: "relative",
        }}
      >
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`${props.isExperiment ? "p-4" : "py-4 -px-4"}`}>
        <h2>
          {props.isExperiment ? (
            <Link href={props.href}>
              <a
                className="flex block text-p text-custom-blue-projects-link underline hover:opacity-70"
                tabIndex="0"
              >
                {props.title}
                {props.href.substring(0, 8) === "https://" ? (
                  <img
                    src="/external-link.svg"
                    className="px-1 py-2"
                    alt={t("externalLink")}
                  />
                ) : undefined}
              </a>
            </Link>
          ) : (
            props.title
          )}
        </h2>
        {props.isExperiment ? (
          <span
            className={`block w-max py-2 px-2 my-4 font-body font-bold border-l-4 ${
              "border-" +
              (tagColours[props.tag] || "gray-experiment") +
              "-darker"
            } ${
              "bg-" + (tagColours[props.tag] || "gray-experiment") + "-lighter"
            }`}
          >
            {props.tagLabel}
          </span>
        ) : undefined}
        <p className="mt-2 leading-30px text-lg">{props.description}</p>
        {!props.isExperiment ? (
          <span className="flex">
            <ActionButton
              href={props.btnHref}
              text={props.btnText}
              id={props.btnId}
              dataCy={props.btnId}
              className="rounded xxs:w-full xs:w-fit my-4 py-2 bg-custom-gray-lighter text-custom-blue-text focus:ring-inset focus:ring-2 focus:ring-black hover:bg-details-button-hover-gray text-center border border-details-button-gray"
            />
          </span>
        ) : undefined}
      </div>
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

export default Card;
