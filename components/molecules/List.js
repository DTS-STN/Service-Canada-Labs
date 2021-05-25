import PropTypes from "prop-types";

/**
 *  List component
 */
export function List(props) {
  let opacity = 20;
  return (
    <ol className={props.className}>
      {props.items.map((item, key) => {
        if (opacity < 100) opacity += 20;
        let className =
          "opacity-" +
          opacity +
          " bg-circle-color flex-shrink-0 mr-4 mb-2 rounded-full h-32 w-32 flex items-center justify-center text-white font-bold text-h1xl relative md:left-0 -left-14";

        return (
          <li key={key} className="flex">
            <span className={className}>{key + 1}</span>
            <p className="text-sm md:text-p my-auto leading-normal font-body">
              {item}
            </p>
          </li>
        );
      })}
    </ol>
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
