import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

export function DateModified({ date = process.env.NEXT_PUBLIC_BUILD_DATE }) {
  const { t } = useTranslation("common");
  // TeamCity build dates are received in the format yyyyMMdd
  let dateFormatted = "NA";
  if (date) {
    if (!date.match(/(?=\S*['-])([a-zA-Z'-]+)/gm)) {
      dateFormatted = date.replace(/^(.{4})(.{2})/gm, "$1-$2-");
    } else dateFormatted = date;
  }

  return (
    <dl className="mt-8 py-2 font-body font-normal text-sm">
      <dt className="inline">{t("dateModified")}</dt>
      <dd className="inline">
        {dateFormatted === "NA" ? (
          <time>{` ${dateFormatted}`}</time>
        ) : (
          <time dateTime={dateFormatted}>{` ${dateFormatted}`}</time>
        )}
      </dd>
    </dl>
  );
}

DateModified.propTypes = {
  // Date string in format yyyyMMdd
  date: PropTypes.string,
};
