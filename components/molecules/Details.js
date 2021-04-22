import PropTypes from "prop-types";

/**
 * Drop Down Element
 */
export function Details(props) {
  return (
    <details data-testid={props.dataTestId} data-cy={props.dataCy}>
      <summary className="h-46px w-300px bg-details-button-gray rounded py-12px px-5px font-body text-sm">
        {props.label}
      </summary>
      <div className="w-300px min-h-200px bg-custom-blue-details mt-1 p-15px">
        {props.children}
      </div>
    </details>
  );
}

Details.propTypes = {
  /**
   * id for the details element
   */
  id: PropTypes.string,

  /**
   * the label of the details button
   */
  label: PropTypes.string.isRequired,

  /**
   * the content for the details element
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,

  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
