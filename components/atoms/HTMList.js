import PropTypes from "prop-types";

export function HTMList({ tag = "ul", content, listClassName, liClassName }) {
  const parseList = (content) =>
    content
      .split("*") // split the string on asterisks
      .filter((item) => item) // filter out empty strings
      .map((item, index) => (
        <li className={liClassName} key={index}>
          {item.trim()}
        </li>
      ));

  return tag === "ul" ? (
    <ul className={listClassName}>{parseList(content)}</ul>
  ) : (
    <ol className={listClassName}>{parseList(content)}</ol>
  );
}

HTMList.propTypes = {
  tag: PropTypes.string,
  content: PropTypes.string.isRequired,
  listClassName: PropTypes.string,
  liClassName: PropTypes.string,
};
