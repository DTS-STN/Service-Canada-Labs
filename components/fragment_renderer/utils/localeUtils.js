/**
 * Selects content based on locale
 * @param {Object} content - Object containing en/fr versions
 * @param {string} locale - Current locale
 * @param {string} enKey - Key for English content (default: 'en')
 * @param {string} frKey - Key for French content (default: 'fr')
 */
export const getLocalizedContent = (
  content,
  locale,
  enKey = "en",
  frKey = "fr"
) => {
  return locale === "en" ? content[enKey] : content[frKey];
};

/**
 * Formats image data consistently across fragments
 */
export const formatImageData = (imageData, locale) => ({
  src: getLocalizedContent(imageData, locale, "scImageEn", "scImageFr")
    ._publishUrl,
  alt: imageData.scImageAltTextEn
    ? getLocalizedContent(
        imageData,
        locale,
        "scImageAltTextEn",
        "scImageAltTextFr"
      )
    : "",
  width: imageData.scImageEn.width,
  height: imageData.scImageEn.height,
});
