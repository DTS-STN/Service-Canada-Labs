import PropTypes from "prop-types";
import Link from "next/link";

/**
 *  Breadcrumb component
 */
export function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumbs">
      <ul className="block text-custom-blue-dark text-base font-body -ml-4 -my-4 ">
        <li className="inline-block min-w-0 max-w-full truncate px-1 -my-4">
          <Link
            href="https://www.canada.ca/"
            className="text-sm hover:text-custom-blue-link visited:text-purple-700 underline"
          >
            Canada.ca
          </Link>
        </li>

        {props.items
          ? props.items.map((item, key) => {
              return (
                <li
                  key={key}
                  className="inline-block min-w-0 max-w-full truncate -my-4 px-1"
                >
                  <span className="inline-block align-middle text-gray-breadcrumb icon-cheveron-right mr-4" />
                  <Link
                    href={item.link}
                    className="text-sm hover:text-canada-footer-hover-font-blue text-canada-footer-font visited:text-purple-700 underline"
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </nav>
  );
}

Breadcrumb.propTypes = {
  /**
   * Array of Items for the breadcrumb
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text for the breadcrumb
       */
      text: PropTypes.string,

      /**
       * Link for the breadcrumb
       */
      link: PropTypes.string,
    })
  ),
};
