import "node-fetch";

export const submitEmail = async (
  data,
  defaults,
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
        ...defaults,
        ...data,
      },
    }),
  });

  return [notifyResponse.status, await notifyResponse.json()];
};
