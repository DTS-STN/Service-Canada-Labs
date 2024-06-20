export const getDictionaryTerm = (dictionary, entryId, locale) => {
  const dictionaryEntry = dictionary.find((obj) => obj.scId === entryId);
  return locale === "en" ? dictionaryEntry.scTermEn : dictionaryEntry.scTermFr;
};
