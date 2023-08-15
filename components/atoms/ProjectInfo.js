import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { HelpIcon } from "@dts-stn/service-canada-design-system";

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
        <strong className="font-body col-span-1 my-auto">
          {props.termStage}
        </strong>
        <div className="flex col-span-2 items-end">
          <div className="shrink-0 flex">
            <p className="my-auto">{props.stage}</p>
            <div className="my-auto">
              <HelpIcon
                lang={props.locale}
                title={props.stage}
                body={props.definition}
              />
            </div>
          </div>
        </div>
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
  locale: PropTypes.string,
};
