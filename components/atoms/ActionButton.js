import PropTypes from "prop-types";
import Link from "next/link";
import { useEffect } from "react";

/**
 * Button component
 */
export function ActionButton(props) {
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

  //Activate Links with spacebar
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

  return props.href ? (
    <Link
      href={props.href}
      aria-label={`${props.ariaLabel ? props.ariaLabel : undefined}`}
      className={`flex flex-row ${style} focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded-sm w-fit text-base ${props.custom}`}
      onClick={props.onClick}
      id={props.id}
      data-testid={props.dataTestId}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
      role="button"
      draggable="false"
      lang={props.lang}
    >
      {props.icon && !props.iconEnd ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <span
          className={`${props.icon} ${props.iconStyle}`}
          data-testid={props.dataTestId}
        />
      ) : undefined}
    </Link>
  ) : (
    <button
      aria-expanded={`${props.ariaExpanded ? props.ariaExpanded : undefined}`}
      aria-label={`${props.ariaLabel ? props.ariaLabel : undefined}`}
      className={`flex flex-row ${style} focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded-sm w-fit text-base ${props.custom}`}
      onClick={props.onClick}
      type={props.type}
      id={props.id}
      data-testid={props.dataTestId}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
      data-gc-analytics-submit={props.analyticsTracking ? "submit" : undefined}
    >
      {props.icon && !props.iconEnd ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
      {props.imageSource && props.imageAlt ? (
        <>
          <img src={props.imageSource} alt={props.imageAlt} />
          <span className={props.imageSpanClass} data-testid={props.dataTestId}>
            {props.imageSpanText}
          </span>
        </>
      ) : undefined}
      <span className="flex">
        {props.text}
        {props.expandIcon}
      </span>
      {props.children}
      {props.icon && props.iconEnd ? (
        <span
          className={`${props.icon} ${props.iconStyle}`}
          data-testid={props.dataTestId}
        />
      ) : undefined}
    </button>
  );
}

ActionButton.propTypes = {
  /**
   * This will add an icon inside the button when needed
   */
  icon: PropTypes.string,

  /**
   * This is for placing an icon at the end of the component
   */
  iconEnd: PropTypes.bool,

  /**
   * This will add styles to the icon span inside the button when needed
   */
  iconStyle: PropTypes.string,

  /**
   * The text that the button will display
   */
  text: PropTypes.string,

  /**
   * Style link as a button when there's a href
   */
  href: PropTypes.string,

  /**
   * Identify which button being clicked
   */
  id: PropTypes.string.isRequired,

  /**
   * Lang attribute for links that do not match the language of the top level document
   */
  lang: PropTypes.string,
  /**
   * the type of the button
   */
  type: PropTypes.oneOf(["submit", "reset"]),

  /**
   * Secondary color styling option
   */
  secondary: PropTypes.bool,

  /**
   * Tertiary color styling option
   */
  tertiary: PropTypes.bool,

  /**
   * Custom button styling option
   */
  custom: PropTypes.string,

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

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
   * any other elements you want to add to the button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCy: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCyButton: PropTypes.string,
  /**
   * Enabled or disabled the button
   */
  disabled: PropTypes.bool,
  /**
   * For tracking reset or submit on forms for analytics
   */
  analyticsTracking: PropTypes.bool,
  /**
   * Expand icon that will show the Feedback as popup
   */
  expandIcon: PropTypes.object,
  /**
   * Aria expanded state
   */
  ariaExpanded: PropTypes.string,
  /**
   * Aria label
   */
  ariaLabel: PropTypes.string,
  /**
   * Image source
   */
  imageSource: PropTypes.string,
  /**
   * Image alt
   */
  imageAlt: PropTypes.string,
  /**
   * Image span text
   */
  imageSpanText: PropTypes.string,
  /**
   * Image span classname
   */
  imageSpanClass: PropTypes.string,
};
