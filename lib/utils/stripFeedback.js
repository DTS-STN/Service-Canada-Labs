export function stripFeedback(feedbackToClean) {
  //Remove postal code from feedback
  feedbackToClean = feedbackToClean.replaceAll(
    /[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d/gim,
    "### ###"
  );

  //Remove SIN from feedback
  feedbackToClean = feedbackToClean.replaceAll(
    /(\d{3}\s*\d{3}\s*\d{3}|\d{3}\D*\d{3}\D*\d{3})/gm,
    "### ### ###"
  );

  //Remove email from feedback
  feedbackToClean = feedbackToClean.replaceAll(
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/gim,
    "####@####.####"
  );

  //Removes phone number from feedback
  feedbackToClean = feedbackToClean.replaceAll(
    /(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/gm,
    "# ### ### ###"
  );
  feedbackToClean = feedbackToClean.replaceAll(
    /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/gm,
    "# ### ### ###"
  );

  return feedbackToClean;
}
