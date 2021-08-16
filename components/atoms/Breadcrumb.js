import PropTypes from "prop-types";
import Link from "next/link";

/**
 *  Breadcrumb component
 */
export function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumbs">
      <ul className="block text-custom-blue-dark text-base font-body">
        <li className="inline-block min-w-0 max-w-full truncate px-2">
          <Link href="https://www.canada.ca/">
            <a className="text-sm hover:text-custom-blue-link visited:text-purple-700 underline">
              Canada.ca
            </a>
          </Link>
        </li>

        {props.items
          ? props.items.map((item, key) => {
              return (
                <li
                  key={key}
                  className="inline-block min-w-0 max-w-full truncate px-2"
                >
                  <span className="inline-block align-middle text-gray-breadcrumb icon-cheveron-right mx-4" />
                  <Link href={item.link}>
                    <a className="text-sm hover:text-canada-footer-hover-font-blue text-canada-footer-font visited:text-purple-700 underline">
                      {item.text}
                    </a>
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
