import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import FocusTrap from "focus-trap-react";

export function ProjectInfo(props) {
  const { t } = useTranslation("common");
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="grid grid-cols-4 gap-x-4 text-[20px]">
        <strong className="col-span-1">{props.termStarted}</strong>
        <p className="col-span-3">
          {!props.dateStarted ? undefined : props.dateStarted.substring(0, 10)}
        </p>
        <strong className="col-span-1">{props.termEnded}</strong>
        <p className="col-span-3">
          {!props.dateEnded ? undefined : props.dateEnded.substring(0, 10)}
        </p>
        <strong className="col-span-1">{props.termStage}</strong>
        <div className="flex col-span-3 items-end">
          <p className="shrink-0 flex">
            {props.stage}
            <button
              onClick={() => setShowInfo(!showInfo)}
              aria-label="project stage detail"
              aria-expanded={showInfo}
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                color={"#269ABC"}
                size="lg"
                className="px-2"
              />
            </button>
            <button
              className="text-xs text-[#284162] underline mr-2"
              onClick={() => setShowInfo(!showInfo)}
              aria-label="project stage detail"
              aria-expanded={showInfo}
            >
              {props.information}
            </button>
          </p>
          {showInfo ? (
            <FocusTrap
              focusTrapOptions={{
                initialFocus: false,
                allowOutsideClick: true,
              }}
            >
              <div className="relative w-full">
                <div
                  style={{
                    background: "#E8F2F4",
                    borderColor: "#269ABC",
                  }}
                  className="absolute -top-8 border rounded-md px-4 py-2 my-2"
                >
                  {
                    <>
                      <p tabIndex={0} className="inline">
                        <strong>{props.term}</strong>
                      </p>
                      <p
                        className="inline"
                        dangerouslySetInnerHTML={{ __html: props.definition }}
                      ></p>
                    </>
                  }
                </div>
              </div>
            </FocusTrap>
          ) : undefined}
        </div>
        <strong className="col-span-1">{props.termSummary}</strong>
        <p className="col-span-3">{props.summary}</p>
      </div>
    </>
  );
}

ProjectInfo.propTypes = {
  dateStarted: PropTypes.string,
  dateEnded: PropTypes.string,
  stage: PropTypes.string,
  summary: PropTypes.string,
  info: PropTypes.string,
};
