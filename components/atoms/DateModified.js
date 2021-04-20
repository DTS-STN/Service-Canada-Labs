import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

export function DateModified(props) {
  const { t } = useTranslation("common");
  // TeamCity build dates are received in the format yyyyMMdd
  const dateFormatted = props.date.replace(/^(.{4})(.{2})/gm, "$1-$2-");
  return (
    <span className="font-body text-sm">
      {t("dateModified")} {dateFormatted}
    </span>
  );
}

DateModified.propTypes = {
  // Date string in format yyyyMMdd
  date: PropTypes.string,
};
