import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

/**
 * Contextual alert component meant to draw attention to a short important message.
 * Currently only has the option for an info alert, but other options can be added later so the alert
 * can be customized.
 */
export function Alert(props) {
  return (
    <div className="layout-container">
      <div className="relative border-l-6 border-[#269ABC] min-h-40px my-10">
        <span className="absolute py-1 top-4 -left-3.5 bg-white">
          <FontAwesomeIcon icon={faCircleInfo} color={"#269ABC"} size="xl" />
        </span>
        <div className="ml-6">
          <p className="text-h3 font-display pt-4 pb-4 lg:pt-5">
            <b>{props.title}</b>
          </p>
          <p className="text-p">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  /**
   * The title for the alert
   */
  title: PropTypes.string,
  /**
   * The description for the alert, accepts a string or JSX
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
