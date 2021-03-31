import PropTypes from "prop-types";
import Link from "next/link";

/**
 *  Breadcrumb component
 */
export function Breadcrumb(props) {
  const listLenght = props.items.length - 1;

  return (
    <nav>
      <ul className="inline-flex text-custom-blue-blue font-body ">
        {props.items.map((item, key) => {
          return listLenght === key ? (
            <li key={key} className="inline-flex">
              <Link href={item.link}>{item.text}</Link>
            </li>
          ) : (
            <li key={key} className="inline-flex">
              <Link href={item.link}>{item.text}</Link>
              <div className="text-gray-dark-100 text-xs mx-6">{">"}</div>
            </li>
          );
        })}
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
  ).isRequired,
};
