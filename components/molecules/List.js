import PropTypes from "prop-types";

/**
 *  List component
 */
export function List(props) {
  let circleColor = 0;
  return (
    <ol className={props.className}>
      {props.items.map((item, key) => {
        if (circleColor < 4) circleColor += 1;

        return (
          <li key={key} className="flex">
            <span
              className={
                "bg-circle-color" +
                circleColor +
                " flex-shrink-0 mr-4 mb-2 rounded-full h-32 w-32 flex items-center justify-center text-white font-bold text-h1xl relative md:left-0 -left-14"
              }
            >
              {key + 1}
            </span>
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
