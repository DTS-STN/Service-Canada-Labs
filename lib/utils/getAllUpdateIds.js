export function getAllUpdateIds(items) {
  return items.flatMap((item) => [
    {
      params: {
        id: item.scPageNameEn,
      },
      locale: "en",
    },
    {
      params: {
        id: item.scPageNameFr,
      },
      locale: "fr",
    },
  ]);
}
