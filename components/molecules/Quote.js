import PropTypes from "prop-types";

/**
 * Quote component
 */
export function Quote(props) {
  return (
    <div
      title="Quote"
      className="border-l-4 text-sm md:text-p pl-4 leading-normal font-body"
    >
      {props.html === undefined ? (
        <div>{props.children}</div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      )}
      <p className="text-gray-500 pt-4"> — {props.author}</p>
    </div>
  );
}

Quote.propTypes = {
  /**
   * Option for styling component
   */
  className: PropTypes.string,

  /**
   * Option for html
   */
  html: PropTypes.string,

  /**
   * Content
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * Author
   */
  author: PropTypes.string,
};
