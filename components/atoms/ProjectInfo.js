import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import FocusTrap from "focus-trap-react";

export function ProjectInfo(props) {
  const { t } = useTranslation("common");
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-2 text-[20px]">
        <strong className="font-body col-span-1">{props.termStarted}</strong>
        <p className="col-span-2">
          {!props.dateStarted ? undefined : props.dateStarted.substring(0, 10)}
        </p>
        <strong className="font-body col-span-1">{props.termEnded}</strong>
        <p className="col-span-2">
          {!props.dateEnded ? undefined : props.dateEnded.substring(0, 10)}
        </p>
        <strong className="font-body col-span-1">{props.termStage}</strong>
        <div className="flex col-span-2 items-end">
          <p className="shrink-0 flex">
            {props.stage}
            <button
              onClick={() => setShowInfo(!showInfo)}
              aria-label="project stage detail"
              aria-expanded={showInfo}
            >
              <FontAwesomeIcon
                icon={faCircleQuestion}
                color={"#269ABC"}
                size="lg"
                className="px-2"
              />
            </button>
            <button
              className="text-xs text-[#284162] underline mr-2 hover:text-custom-blue-link"
              onClick={() => setShowInfo(!showInfo)}
              aria-label="project stage detail"
              aria-expanded={showInfo}
            >
              {props.information}
            </button>
          </p>
        </div>
        {showInfo ? (
          <div className="col-span-1 xl:col-span-3">
            <FocusTrap
              focusTrapOptions={{
                initialFocus: false,
                allowOutsideClick: true,
              }}
            >
              <div className="w-full">
                <div
                  style={{
                    background: "#E8F2F4",
                    borderColor: "#269ABC",
                  }}
                  className="border rounded-md px-4 py-2 my-2"
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
          </div>
        ) : undefined}
        <strong className="font-body col-span-1 col-start-1">
          {props.termSummary}
        </strong>
        <p className="col-span-2">{props.summary}</p>
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
