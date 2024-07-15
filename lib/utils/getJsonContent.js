//Takes in a json object, a json index and a content index and returns value of fragment at specified index(s)
//i.e scDecriptionEn.json[0].content[0].value
export const getJsonContent = (
  jsonfragment,
  jsonIndex = null,
  contentIndex = null
) => {
  //if jsonIndex and contentIndex are supplied, fragment will be equal to $jsonFragment[$jsonIndex].content[$contentIndex].value
  //i.e scDescriptionEn.json[0].content[0].value
  //if indexes aren't supplied error is thrown
  const fragment =
    jsonIndex != null && contentIndex != null
      ? jsonfragment[jsonIndex].content[contentIndex].value
      : console.error("Missing required index(s)");
  return fragment;
};
