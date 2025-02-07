export const validateRequiredFields = (data, requiredFields) => {
  const missingFields = requiredFields.filter((field) => {
    const value = field.split(".").reduce((obj, key) => obj?.[key], data);
    return value === undefined || value === null;
  });

  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
  }
};

export const fragmentValidators = {
  "SCLabs-Feature-v1": (data) =>
    validateRequiredFields(data, [
      "scTitleEn",
      "scTitleFr",
      "scContentEn.json",
      "scContentFr.json",
      "scLabsButton.0.scId",
    ]),

  "SCLabs-Button-v1": (data) =>
    validateRequiredFields(data, [
      "scId",
      "scButtonType.0",
      "scDestinationURLEn",
      "scDestinationURLFr",
      "scTitleEn",
      "scTitleFr",
    ]),

  "SCLabs-Comp-Content-Image-v1": (data) =>
    validateRequiredFields(data, [
      "scLabLayout",
      "scLabImage.scImageEn._publishUrl",
      "scLabImage.scImageFr._publishUrl",
      "scLabImage.scImageEn.width",
      "scLabImage.scImageEn.height",
      "scLabContent.0.scContentEn.json",
      "scLabContent.0.scContentFr.json",
    ]),

  "SCLabs-Comp-Content-v1": (data) =>
    validateRequiredFields(data, [
      "scLabContent.0.scContentEn.json",
      "scLabContent.0.scContentFr.json",
      "scLabContent.1.scContentEn.json",
      "scLabContent.1.scContentFr.json",
    ]),

  "SCLabs-Content-v1": (data) =>
    validateRequiredFields(data, ["scContentEn.json", "scContentFr.json"]),

  "SCLabs-Image-v1": (data) =>
    validateRequiredFields(data, [
      "scId",
      "scImageEn._publishUrl",
      "scImageFr._publishUrl",
      "scImageEn.width",
      "scImageEn.height",
      "scImageCaptionEn.json",
      "scImageCaptionFr.json",
      "scLongDescHeadingEn",
      "scLongDescHeadingFr",
      "scLongDescEn.json",
      "scLongDescFr.json",
    ]),
};
