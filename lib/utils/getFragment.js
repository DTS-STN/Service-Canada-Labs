export const getFragment = (
  scFragments,
  index,
  fragment,
  value = null, //optional
  jsonIndex = null, //optional
  contentIndex = null //optional
) => {
  // create fragmentIndex to store object at $index of scFragments i.e: scFragments[0]
  let fragmentIndex = scFragments[index];

  //switch case depending on $value provided
  switch (value) {
    //if value is not provided default to null and return the fragment i.e fragmentIndex.scImageAltTextEn
    case null: {
      fragment = fragmentIndex[fragment];
      return fragment;
    }
    //if value is "json" return value of fragmentIndex[$fragment] at $jsonIndex.content.$contentIndex i.e: fragmentIndex.scContentEn.json[0].content[0].value
    case "json": {
      fragment =
        fragmentIndex[fragment][value][jsonIndex].content[contentIndex].value;
      return fragment;
    }
    //if value is not null, and not json, return $value property of $fragmentIndex i.e fragmentIndex.scImageEn._publishUrl
    case value: {
      fragment = fragmentIndex[fragment][value];
      return fragment;
    }
    default:
      break;
  }
};
