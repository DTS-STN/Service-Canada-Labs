export function getAllUpdateIds(idLabel, items) {
  return items.flatMap((item) => [
    {
      params: {
        [idLabel]: item.scPageNameEn,
      },
      locale: "en",
    },
    {
      params: {
        [idLabel]: item.scPageNameFr,
      },
      locale: "fr",
    },
  ]);
}
