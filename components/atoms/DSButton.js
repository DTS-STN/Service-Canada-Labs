import PropTypes from "prop-types";
import { Image } from "./Image";

// Button used in HelpIcon.js and CTA.js
// Use ActionButton.js for all other buttons in the app
export function DSButton(props) {
  //Styling for buttons and links
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

  const styling =
    props.styling === "primary"
      ? PRIMARY
      : props.styling === "secondary"
      ? SECONDARY
      : props.styling === "supertask"
      ? SUPERTASK
      : props.styling === "danger"
      ? DANGER
      : props.styling === "link"
      ? LINK
      : "";

  return props.href === "no ref" ? (
    <button
      className={`flex flex-row px-[16px] py-[8px] ${styling} rounded-sm focus:ring focus:ring-offset-4 ${props.className} `}
      onClick={props.onClick}
      type={props.type}
      id={props.id}
      disabled={props.disabled}
      {...props.attributes}
      alt={props.iconAltText}
    >
      {props.icon && !props.iconEnd ? (
        <span className="grid place-items-center h-8 w-8">
          <Image className="pr-2" src={props.icon} alt={props.iconAltText} />
        </span>
      ) : undefined}
      <span
        className={`grid place-items-center ${
          props.styling === "supertask" ? "h-8" : ""
        }`}
      >
        {props.text}
      </span>
      {props.children}
      {props.icon && props.iconEnd ? (
        <span className="grid place-items-center h-8 w-8">
          <Image className="pl-2" src={props.icon} alt={props.iconAltText} />
        </span>
      ) : undefined}
    </button>
  ) : (
    <a
      href={props.href}
      className={`flex flex-row ${
        props.styling !== "none" ? "btn-link" : ""
      } focus:ring focus:ring-offset-4 ${props.className}`}
      onClick={props.onClick}
      id={props.id}
      disabled={props.disabled}
      role="button"
    >
      {props.icon && !props.iconEnd ? (
        <Image
          className="h-8 w-8 pr-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <div className="grid place-items-center h-8 w-8">
          <Image
            className="pl-5 pb-3"
            src={props.icon}
            alt={props.iconAltText}
          />
        </div>
      ) : undefined}
    </a>
  );
}

DSButton.defaultProps = {
  id: "btn1",
  styling: "supertask",
  text: "default",
  href: "no ref",
};

DSButton.propTypes = {
  /**
   * Identify which button being clicked
   */
  id: PropTypes.string.isRequired,

  /**
   * User must input one of the follow button styles to apply
   * to their button. To apply the link style, the user must
   * also add a value to the href prop
   */
  styling: PropTypes.oneOf([
    "supertask",
    "primary",
    "secondary",
    "danger",
    "link",
    "none",
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
  className: PropTypes.string,

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
