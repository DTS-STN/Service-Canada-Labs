import PropTypes from "prop-types";

/**
 * Button component
 */
export function ActionButton(props) {
  return (
    <button
      className={`flex justify-center content-center h-auto p-1 rounded-sm py-2 px-4 focus:ring-1 focus:ring-black focus:ring-offset-2
      ${
        !props.secondary && !props.disabled && !props.custom
          ? "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light"
          : props.className
      }
      ${
        props.secondary && !props.disabled
          ? "bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200"
          : props.className
      }
      ${props.custom && !props.secondary ? props.custom : null}
      ${
        props.disabled
          ? "bg-gray-light text-gray-600 border border-gray-md"
          : props.className
      } text-base font-body`}
      onClick={props.onClick}
      id={props.id}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
    >
      {props.icon ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
      {props.text}
      {props.children}
    </button>
  );
}

ActionButton.propTypes = {
  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,

  /**
   * The text that the button will display
   */
  text: PropTypes.string,

  /**
   * Identify which button being clicked
   */
  id: PropTypes.string,

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
