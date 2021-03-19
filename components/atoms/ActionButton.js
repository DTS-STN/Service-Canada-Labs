import PropTypes from "prop-types";

/**
 * Button component
 */
export function ActionButton(props) {
  return (
    <button
      className={`flex justify-center content-center h-auto p-1 ${
        props.fullyRounded
          ? "rounded-full py-2 px-4"
          : props.rounded
          ? "rounded-md py-2 px-4"
          : props.notRound
          ? "rounded-sm"
          : "rounded-md"
      } focus:ring-1 focus:ring-black ${
        props.invert && !props.disabled
          ? "bg-blue-600 text-white border border-blue-600 hover:bg-blue-500"
          : props.className
      } ${
        props.disabled
          ? "bg-gray-light text-gray-600 border border-gray-md "
          : props.className
      } text-sm px-4 focus:outline-none`}
      onClick={props.onClick}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onMouseLeave}
      id={props.id}
      data-cy={props.id}
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
   * This will add the smallest rd css to the button
   */
  notRound: PropTypes.bool,
  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,
  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

  /**
   * Identify which button being clicked
   */
  id: PropTypes.string,

  /**
   * Inverted color styling on the buttons as an default option
   */
  invert: PropTypes.bool,

  /**
   * Boolean flag that specifies the button should be completely rounded
   */
  fullyRounded: PropTypes.bool,

  /**
   * Boolean flag that specifies the button should be slightly rounded
   */
  rounded: PropTypes.bool,

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * Callback for when a user's mouse goes over the button
   */
  onHover: PropTypes.func,

  /**
   * Callback for when a user's mouse leaves the button
   */
  onMouseLeave: PropTypes.func,

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
