import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export function ProjectInfo(props) {
  const { t } = useTranslation("common");
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div className="p-4 grid grid-cols-4 gap-x-4">
        <strong className="col-span-1">{t("started")}</strong>
        <p className="col-span-3">{props.dateStarted.substring(0, 10)}</p>
        <strong className="col-span-1">{t("ended")}</strong>
        <p className="col-span-3">{props.dateEnded.substring(0, 10)}</p>
        <strong className="col-span-1 whitespace-nowrap">{t("stage")}</strong>
        <div className="info col-span-3">
          <p className="shrink-0">
            {props.stage}
            <FontAwesomeIcon
              icon={faCircleInfo}
              color={"#269ABC"}
              size="lg"
              className="px-2 mr-2"
              onClick={() => setShowInfo(!showInfo)}
            />
          </p>
          {showInfo ? (
            <div
              style={{
                background: "#E8F2F4",
                borderColor: "#269ABC",
              }}
              className="border rounded-md px-4 py-2 my-2"
            >
              {
                <p>
                  <strong>{props.stage}</strong>
                  {props.info}
                </p>
              }
            </div>
          ) : undefined}
        </div>
        <strong className="col-span-1">{t("status")}</strong>
        <p className="col-span-3">{props.status}</p>
      </div>
    </>
  );
}

ProjectInfo.propTypes = {
  dateStarted: PropTypes.string,
  dateEnded: PropTypes.string,
  projectStage: PropTypes.string,
  stage: PropTypes.string,
  status: PropTypes.string,
  info: PropTypes.string,
};
