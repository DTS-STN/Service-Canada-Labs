import PropTypes from "prop-types";

/**
 * Quote component
 */
export function Quote(props) {
  return (
    <figure
      title="Quote"
      className={
        props.className +
        " border-l-4 text-sm md:text-p pl-4 leading-normal font-body"
      }
    >
      <blockquote className="max-w-sm">{props.text}</blockquote>
      <figcaption className="text-gray-500 pt-4"> — {props.author}</figcaption>
    </figure>
  );
}

Quote.propTypes = {
  /**
   * Option for styling component
   */
  className: PropTypes.string,

  /**
   * Quote
   */
  text: PropTypes.string,

  /**
   * Author
   */
  author: PropTypes.string,
};
