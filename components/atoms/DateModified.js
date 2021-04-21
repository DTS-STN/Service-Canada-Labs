import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

export function DateModified(props) {
  const { t } = useTranslation("common");
  // TeamCity build dates are received in the format yyyyMMdd
  const dateFormatted = props.date
    ? props.date.replace(/^(.{4})(.{2})/gm, "$1-$2-")
    : "NA";
  return (
    <dl className="mt-8 py-2 font-body font-normal text-sm">
      <dt className="inline">{t("dateModified")}</dt>
      <dd className="inline">
        <time datetime={dateFormatted}>{` ${dateFormatted}`}</time>
      </dd>
    </dl>
  );
}

DateModified.propTypes = {
  // Date string in format yyyyMMdd
  date: PropTypes.string,
};
