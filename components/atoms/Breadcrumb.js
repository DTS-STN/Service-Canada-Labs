import PropTypes from "prop-types";
import Link from "next/link";

/**
 *  Breadcrumb component
 */
export function Breadcrumb(props) {
  return (
    <nav>
      <ul className="text-custom-blue-blue text-base font-body">
        <li className="inline-flex">
          <Link href="https://www.canada.ca/">Canada.ca</Link>
        </li>

        {props.items
          ? props.items.map((item, key) => {
              return (
                <li key={key} className="inline-flex flex-shrink truncate">
                  <span className="text-gray-dark-100 text-sm mx-6 pt-0.5">
                    {">"}
                  </span>
                  <Link href={item.link}>{item.text}</Link>
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
