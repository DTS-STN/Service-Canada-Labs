import PropTypes from "prop-types";

/**
 * Drop Down Element
 */
export function Details(props) {
  return (
    <details data-testid={props.dataTestId} data-cy={props.dataCy}>
      <summary className="h-46px max-w-350px w-full bg-details-button-gray focus:ring-inset focus:ring-2 focus:ring-black active:bg-details-button-active-gray hover:bg-details-button-hover-gray rounded py-12px px-5px font-body text-sm text-center text-canada-footer-font cursor-pointer border border-outset border-details-button-gray">
        {props.label}
      </summary>
      <div className="max-w-350px w-full min-h-200px bg-gray-light-200 mt-1 p-15px border border-details-border-gray rounded ring-inset ring-1 ring-gray-light-200">
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
