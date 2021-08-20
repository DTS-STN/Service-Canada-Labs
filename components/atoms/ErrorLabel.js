import PropTypes from "prop-types";

/**
 * error label component that is used with form inputs to display error messages
 */
export function ErrorLabel(props) {
  return (
    <div
      className={`border-l-4 border-error-border-red px-3 py-1 bg-error-background-red font-body font-bold mb-5px text-sm lg:text-p ${props.className}`}
    >
      {props.message}
    </div>
  );
}

ErrorLabel.propTypes = {
  message: PropTypes.string.isRequired,

  /**
   * Prop for adding some classes
   */
  className: PropTypes.string,
};
