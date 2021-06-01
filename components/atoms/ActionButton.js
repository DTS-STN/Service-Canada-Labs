import PropTypes from "prop-types";
import Link from "next/link";
import { useEffect } from "react";

/**
 * Button component
 */
export function ActionButton(props) {
  //Styling for buttons and links
  const basicStyle =
    "rounded-sm focus:ring-1 focus:ring-black focus:ring-offset-2";
  const defaultStyle =
    "py-2 px-4 bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light";
  const secondaryStyle =
    "py-2 px-4 bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200";
  const tertiaryStyle =
    "py-2 underline hover:text-canada-footer-hover-font-blue text-canada-footer-font";
  const disabledStyle =
    "py-2 px-4 bg-gray-light text-gray-600 border border-gray-md";

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
    <Link href={props.href}>
      <a
        className={`${basicStyle}
        ${
          !props.secondary && !props.disabled && !props.custom
            ? defaultStyle
            : props.className
        }
        ${props.secondary && !props.disabled ? secondaryStyle : props.className}
        ${props.custom && !props.secondary ? props.custom : ""}
        ${props.disabled ? disabledStyle : props.className}`}
        onClick={props.onClick}
        id={props.id}
        data-testid={props.dataTestId}
        data-cy={props.dataCy || props.id}
        data-cy-button={props.dataCyButton}
        disabled={props.disabled}
        role="button"
        draggable="false"
      >
        {props.icon && !props.iconEnd ? (
          <span className={props.icon} data-testid={props.dataTestId} />
        ) : undefined}
        {props.text}
        {props.children}
        {props.icon && props.iconEnd ? (
          <span className={props.icon} data-testid={props.dataTestId} />
        ) : undefined}
      </a>
    </Link>
  ) : (
    <button
      className={`${basicStyle}
      ${
        !props.secondary && !props.disabled && !props.custom
          ? defaultStyle
          : props.className
      }
      ${props.secondary && !props.disabled ? secondaryStyle : props.className}
      ${props.custom && !props.secondary ? props.custom : ""}
      ${props.disabled ? disabledStyle : props.className}`}
      onClick={props.onClick}
      type={props.type}
      id={props.id}
      data-testid={props.dataTestId}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
    >
      {props.icon && !props.iconEnd ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
    </button>
  );
}

ActionButton.propTypes = {
  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,

  /**
   * This is for placing an icon at the end of the component
   */
  iconEnd: PropTypes.bool,

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
   * the type of the button
   */
  type: PropTypes.oneOf(["submit", "reset"]),

  /**
   * Secondary color styling option
   */
  secondary: PropTypes.bool,

  /**
   * Custom button styling option
   */
  custom: PropTypes.string,

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * css overrides for button
   */
  className: PropTypes.string,

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
};
