import { ActionButton } from "../atoms/ActionButton";

export const SurveyCTA = ({
  heading,
  description,
  buttonLabel,
  buttonLink,
  buttonType,
}) => {
  return (
    <div className="flex flex-col md:flex-row py-6 bg-multi-blue-blue70 rounded-2xl">
      <div className="flex flex-col px-10 text-multi-neutrals-white">
        <h3 className="font-display mt-0">{heading}</h3>
        <p className="font-body">{description}</p>
      </div>
      <div className="flex flex-col px-10 pt-5 md:pt-0 md:justify-center md:items-center whitespace-nowrap">
        <ActionButton href={buttonLink} text={buttonLabel} style="tertiary" />
      </div>
    </div>
  );
};
