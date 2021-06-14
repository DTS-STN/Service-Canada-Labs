import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import Link from "next/link";

/**
 * A section that will have a title, small description, and a link to some action we want to user to make
 */
export function CallToAction(props) {
  return (
    <div className="bg-custom-blue-experiment-blue text-white">
      <h2>{props.title}</h2>
      <div className="layout-container mb-2 mt-5">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24">
          <p>{props.description}</p>
          <div>
            <ActionButton
              id="become-a-participant-btn"
              href={props.href}
              text={props.hrefText}
            />
            <Link href="#">
              <a className="text-sm hover:text-canada-footer-hover-font-blue text-canada-footer-font visited:text-purple-700 underline">
                {item.text}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

CallToAction.propTypes = {
  /**
   * title of the call to action
   */
  title: PropTypes.string.isRequired,

  /**
   * a short description about what the call to action is about
   */
  description: PropTypes.string.isRequired,

  /**
   * the url to the action
   */
  href: PropTypes.string.isRequired,

  /**
   * url text to be displayed
   */
  hrefText: PropTypes.string.isRequired,
};
