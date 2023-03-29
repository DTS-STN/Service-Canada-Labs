import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Link from "next/link";

export function ActionButton(props) {
  const PRIMARY =
    "text-multi-neutrals-white bg-multi-blue-blue70 hover:bg-multi-blue-blue60g focus:bg-multi-blue-blue60g";
  const SECONDARY =
    "text-multi-blue-blue60b bg-multi-neutrals-grey30a hover:bg-multi-neutrals-grey50a focus:bg-multi-neutrals-grey60";
  const SUPERTASK =
    "text-multi-neutrals-white bg-specific-green-green50 hover:bg-specific-green-green70 focus:bg-sepcific-green-green70";
  const DANGER =
    "text-multi-neutrals-white bg-specific-red-red50 hover:bg-specific-red-red70 focus:bg-specific-red-red70";
  const LINK =
    "text-multi-blue-blue60c hover:text-multi-blue-blue50b focus:text-multi-blue-blue60f";

  const style =
    props.style === "primary"
      ? PRIMARY
      : props.style === "secondary"
      ? SECONDARY
      : props.style === "supertask"
      ? SUPERTASK
      : props.style === "danger"
      ? DANGER
      : props.style === "link"
      ? LINK
      : "";

  // Activate Links with spacebar
  useEffect(() => {
    let link = document.getElementById(props.id);
    if (link) {
      link.addEventListener("keydown", (event) => {
        if (event.key === "Spacebar" || event.key === " ") {
          event.preventDefault();
          link.click();
        }
      });
    }
  });

  return !props.href ? (
    <button
      className={`flex flex-row ${style} focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded-sm w-fit text-base font-display ${props.custom} `}
      onClick={props.onClick}
      type={props.type}
      id={props.id}
      disabled={props.disabled}
      {...props.attributes}
    >
      {props.icon && !props.iconEnd ? (
        <span className="grid place-items-center h-8 w-8">
          <img className="pr-2" src={props.icon} alt={props.iconAltText} />
        </span>
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <span className="grid place-items-center h-8 w-8">
          <img className="pl-2" src={props.icon} alt={props.iconAltText} />
        </span>
      ) : undefined}
    </button>
  ) : (
    <Link
      href={props.href}
      className={`flex flex-row ${style} focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded-sm w-fit text-base font-display ${props.custom} `}
      onClick={props.onClick}
      id={props.id}
      disabled={props.disabled}
      role="button"
    >
      {props.icon && !props.iconEnd ? (
        <img
          className="h-8 w-8 pr-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <div className="grid place-items-center h-8 w-8">
          <img className="pl-5 pb-3" src={props.icon} alt={props.iconAltText} />
        </div>
      ) : undefined}
    </Link>
  );
}

ActionButton.propTypes = {
  /**
   * Identify which button being clicked
   */
  id: PropTypes.string.isRequired,

  /**
   * User must input one of the follow button styles to apply
   * to their button. To apply the link style, the user must
   * also add a value to the href prop
   */
  style: PropTypes.oneOf([
    "supertask",
    "primary",
    "secondary",
    "danger",
    "link",
  ]),

  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,

  /**
   * Alt text for icon added to button
   */
  iconAltText: PropTypes.string,

  /**
   * This is for placing an icon at the end of the component
   */
  iconEnd: PropTypes.bool,

  /**
   * Use when button redirects to a new page.
   * Automatically applies the Link styling
   */
  href: PropTypes.string,

  /**
   * the type of the button
   */
  type: PropTypes.oneOf(["submit", "reset", "button"]),

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * bool to disable a button
   */
  disabled: PropTypes.bool,

  /**
   * css overrides for button
   */
  custom: PropTypes.string,

  /**
   * additional attributes for button
   */
  attributes: PropTypes.object,

  /**
   * any other elements you want to add to the button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
