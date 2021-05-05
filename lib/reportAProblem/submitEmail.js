import "node-fetch";

export const submitEmail = async (
  data,
  templateId,
  email,
  notifyApiAddress,
  notifyApiKey
) => {
  const notifyResponse = await fetch(notifyApiAddress, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `ApiKey-v1 ${notifyApiKey}`,
    },
    body: JSON.stringify({
      email_address: email,
      template_id: templateId,
      // notify requires all values in the template to be present
      // in the request.... highly annoying but providing defaults solves this
      personalisation: {
        page_name: "unknown",
        language: "unknown",
        incorrect_information: "no",
        incorrect_information_details: "",
        unclear_information: "no",
        unclear_information_details: "",
        info_not_found: "no",
        info_not_found_details: "",
        adaptive_technology: "no",
        adaptive_technology_details: "",
        privacy_issues: "no",
        privacy_issues_details: "",
        no_where_else_to_go: "no",
        no_where_else_to_go_details: "",
        other: "no",
        other_details: "",
        ...data,
      },
    }),
  });

  return [notifyResponse.status, await notifyResponse.json()];
};
