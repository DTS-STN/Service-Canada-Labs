export function getAllPathParams(idLabels, items) {
  return items.flatMap((item) => [
    {
      params: Object.fromEntries(
        idLabels.map((label, index) => [
          label,
          item.scPageNameEn.split("/").at(-(index + 1)),
        ])
      ),
      locale: "en",
    },
    {
      params: Object.fromEntries(
        idLabels.map((label, index) => [
          label,
          item.scPageNameFr.split("/").at(-(index + 1)),
        ])
      ),
      locale: "fr",
    },
  ]);
}
