import PropTypes from "prop-types";

/**
 * Button component
 */
export function ActionButton(props) {
  return (
    <button
      className={`flex justify-center content-center h-auto p-1 rounded-md py-2 px-4 focus:ring-1 focus:ring-black 
      ${
        !props.secondary && !props.disabled
          ? "bg-custom-blue-100 text-white border border-blue-600 hover:bg-custom-blue-200"
          : props.className
      }
      ${
        props.secondary && !props.disabled
          ? "bg-white text-custom-blue-100 border border-custom-blue-100 hover:bg-gray-200"
          : props.className
      }
      ${
        props.disabled
          ? "bg-gray-light text-gray-600 border border-gray-md"
          : props.className
      } text-sm px-4 focus:outline-none`}
      onClick={props.onClick}
      id={props.id}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      secondary={props.secondary}
      disabled={props.disabled}
    >
      {props.text}
      {props.children}
    </button>
  );
}

ActionButton.propTypes = {
  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

  /**
   * Identify which button being clicked
   */
  id: PropTypes.string,

  /**
   * Secondary color styling option
   */
  secondary: PropTypes.bool,

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
