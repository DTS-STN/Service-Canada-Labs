import PropTypes from "prop-types";

export function Collapse(props) {
  const { id, title, children } = props;
  return (
    <details
      key={id}
      id={id}
      className="mb-[5px] text-multi-neutrals-grey100 leading-[33px]  text-mobileh5 font-body"
      data-testid="details"
    >
      <summary
        key={`summary-${id}`}
        data-testid="summary"
        className="text-multi-blue-blue60d hover:hover:text-multi-blue-blue50b hover:underline border border-multi-neutrals-grey40 rounded px-[15px] py-[5px] cursor-pointer select-none outline-none"
      >
        {title}
      </summary>
      <div className="border border-multi-neutrals-grey40 rounded-b px-[18px] py-[5px] cursor-pointer select-none outline-none">
        {children}
      </div>
    </details>
  );
}

Collapse.defaultProps = {
  id: "defaultAccordion",
};

Collapse.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * Title of the collapsible header
   */
  title: PropTypes.string,

  /**
   * code passed in to fill the expanded area.
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
};
