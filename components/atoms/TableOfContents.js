import PropTypes from "prop-types";

export function TableOfContents(props) {
  return (
    <>
      <h2 className="font-semibold">{props.title}</h2>
      <nav>
        <ul className="leading-4 list-disc">
          {props.headings.map((heading) => (
            <li key={heading.id}>
              <a
                className="underline text-custom-blue-link underline hover:text-custom-blue-projects-link"
                href={`#${heading.id}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

TableOfContents.propTypes = {
  /**
   * The title for the table of contents
   */
  title: PropTypes.string,
  /**
   * An array of headings
   */
  headings: PropTypes.array,
};
