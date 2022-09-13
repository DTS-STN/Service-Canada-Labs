import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";

export function ProjectInfo(props) {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="p-4 grid grid-cols-4 gap-x-4">
        <strong className="col-span-1">{t("started")}</strong>
        <p className="col-span-3">{props.dateStarted.substring(0, 10)}</p>
        <strong className="col-span-1">{t("ended")}</strong>
        <p className="col-span-3">{props.dateEnded.substring(0, 10)}</p>
        <strong className="col-span-1">{t("stage")}</strong>
        <p className="col-span-3">
          {props.stage}
          <FontAwesomeIcon
            icon={faCircleInfo}
            color={"#269ABC"}
            size="lg"
            className="px-2"
            onClick={props.onClick}
          />
        </p>
        <strong className="col-span-1">{t("status")}</strong>
        <p className="col-span-3">{props.status}</p>
      </div>
    </>
  );
}

ProjectInfo.propTypes = {
  dateStarted: PropTypes.string,
  dateEnded: PropTypes.string,
  stage: PropTypes.string,
  status: PropTypes.string,
};
