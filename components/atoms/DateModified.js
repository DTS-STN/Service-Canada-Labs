import PropTypes from "prop-types";

export function DateModified(props) {
  <span className="font-body text-sm">Date Modified: {props.date}</span>;
}

DateModified.propTypes = {
  date: PropTypes.string,
};
