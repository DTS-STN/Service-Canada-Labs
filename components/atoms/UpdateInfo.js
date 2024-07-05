import PropTypes from "prop-types";
import { Link } from "./Link";

export function UpdateInfo(props) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-2 text-[20px]">
        <strong className="font-body text-mobilebody lg:text-p col-span-1">
          {props.projectLabel}
        </strong>
        <div className="mb-1 col-span-2">
          <Link
            id="update-info-project-link"
            className="text-mobilebody lg:text-p"
            text={props.projectName}
            href={props.projectHref}
          />
        </div>
        <strong className="font-body text-mobilebody lg:text-p col-span-1 lg:row-start-2">
          {props.postedOnLabel}
        </strong>
        <p className="col-span-2 lg:row-start-2 mb-1">{props.postedOn}</p>
        <strong className="font-body text-mobilebody lg:text-p col-span-1 lg:row-start-3">
          {props.lastUpdatedLabel}
        </strong>
        <p className="col-span-2 lg:row-start-3 mt-auto">{props.lastUpdated}</p>
      </div>
    </>
  );
}

UpdateInfo.propTypes = {
  projectLabel: PropTypes.string,
  projectName: PropTypes.string,
  projectHref: PropTypes.string,
  postedOnLabel: PropTypes.string,
  postedOn: PropTypes.string,
  lastUpdatedLabel: PropTypes.string,
  lastUpdated: PropTypes.string,
};
