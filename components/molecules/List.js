import PropTypes from "prop-types";

/**
 *  List component
 */
export function List(props) {
  let opacity = 40;
  return (
    <ul className={props.className}>
      {props.items.map((item, key) => {
        let className =
          "bg-opacity-" +
          opacity +
          " bg-circle-color text-shadow-about-circles flex-shrink-0 mr-4 mb-2 rounded-full h-36 w-36 flex items-center justify-center text-white font-bold font-display text-h1xxl relative md:left-0 -left-14";
        if (opacity < 100) opacity += 20;
        return (
          <li key={key} className="flex">
            <span className={className} role="presentation">
              {key + 1}
            </span>
            <p className="text-sm md:text-p my-auto leading-normal font-body">
              {item}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

List.propTypes = {
  /**
   * List items
   */
  items: PropTypes.arrayOf(String).isRequired,

  /**
   * Option for styling component
   */
  className: PropTypes.string,
};
