export async function postFeedbackToGcNotify(data) {
  return await fetch(
    `${process.env.NOTIFY_BASE_API_URL}/v2/notifications/email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `ApiKey-v1 ${process.env.NOTIFY_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: process.env.SUBMIT_FEEDBACK_EMAIL,
        template_id: process.env.NOTIFY_FEEDBACK_TEMPLATE_ID,
        personalisation: {
          ...data,
        },
      }),
    }
  );
}
