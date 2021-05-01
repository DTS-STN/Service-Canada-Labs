export const processData = (data) => {
  // loop over keys in data and generate new object that aligns to notify body
  return Object.keys(data).reduce((prevVal, currentVal) => {
    // split value according to capitalized letters, make all lower case, and then join by underscore
    let variableName = currentVal
      .split(/(?=[A-Z])/)
      .map((value) => value.toLowerCase())
      .join("_");
    // if it ends with text field then this is not a checkbox replace text_field with details
    // other wise it is a checkbox and if it exists in the data the only value for the field should be yes
    // see conditional text section templating docs in notify https://notification.canada.ca/templates
    if (variableName.endsWith("text_field")) {
      variableName = variableName.replace("text_field", "details");
    } else if (variableName.endsWith("check_box")) {
      variableName = variableName.replace("_check_box", "");
      return {
        ...prevVal,
        [variableName]: "yes",
      };
    }
    return {
      ...prevVal,
      [variableName]: data[currentVal],
    };
  }, {});
};
