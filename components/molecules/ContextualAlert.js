import PropTypes from "prop-types";

export function ContextualAlert(props) {
  const warning_img = "/warning_img.svg";
  const danger_img = "/danger_img.svg";
  const info_img = "/info_img.svg";
  const success_img = "/success_img.svg";

  const {
    message_heading,
    message_body,
    id,
    type,
    alert_icon_id,
    alert_icon_alt_text,
    asHtml,
    whiteBG,
  } = props;

  const alert_type =
    type === "warning"
      ? warning_img
      : type === "danger"
      ? danger_img
      : type === "info"
      ? info_img
      : success_img;

  const alert_color =
    type === "warning"
      ? "border-specific-orange-orange50"
      : type === "danger"
      ? "border-specific-red-red50b"
      : type === "info"
      ? "border-specific-cyan-cyan50"
      : "border-specific-green-green50a";

  let white_BG = whiteBG ? "bg-multi-neutrals-white" : " ";

  return (
    <div
      id={id}
      className={`relative min-w-[290px] sm:pl-[24px] pl-[16px] ${white_BG}`}
    >
      <div className="absolute top-3 sm:left-3.5 left-1.5 bg-multi-neutrals-white py-4px">
        {/* change back to image component once fixed */}
        <img id={alert_icon_id} src={alert_type} alt={alert_icon_alt_text} />
      </div>
      <div
        className={`overflow-auto border-l-6 ${alert_color} pl-[24px] py-[17px] leading-8`}
      >
        {asHtml ? (
          <h2
            className="mt-0 text-h3 leading-heading3 ml-1"
            dangerouslySetInnerHTML={{ __html: message_heading }}
          />
        ) : (
          <h2 className="mt-0 text-h3 leading-heading3 ml-1">
            {message_heading}
          </h2>
        )}
        {asHtml ? (
          <div
            className="font-body ml-0.5 text-lg"
            dangerouslySetInnerHTML={{ __html: message_body }}
          />
        ) : (
          <div className="font-body ml-0.5 text-lg">{message_body}</div>
        )}
      </div>
    </div>
  );
}

ContextualAlert.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string.isRequired,

  /**
   * alert type
   */
  type: PropTypes.oneOf(["warning", "info", "success", "danger"]).isRequired,

  /**
   * id for the alert icon
   */
  alert_icon_id: PropTypes.string.isRequired,

  /**
   * Alternate text for the alert icon
   */
  alert_icon_alt_text: PropTypes.string.isRequired,

  /**
   * heading text
   */
  message_heading: PropTypes.string.isRequired,

  /**
   * body text
   */
  message_body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,

  /**
   * HTML toggle. Determines if text is parsed as plain text or HTML.
   */
  asHtml: PropTypes.bool,

  /**
   * If true the background will be white, default is transparent.
   */
  whiteBG: PropTypes.bool,
};
