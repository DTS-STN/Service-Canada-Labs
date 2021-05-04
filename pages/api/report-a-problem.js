import { submitEmail } from "../../lib/reportAProblem/submitEmail";

/**
 * API handler for report a problem functionality. This will take form submissions
 * and call GC Notify service with the appropriate template and data
 */
async function handler(req, res) {
  if (req.method === "POST") {
    // if there is no data specified we don't want to call notify
    if (
      Object.keys(req.body).length <= 1 ||
      !process.env.REPORT_A_PROBLEM_ENABLED
    ) {
      res.status(200).end("OK");
    } else {
      try {
        const notifyResponse = await submitEmail(
          {
            ...req.body,
            page_name: req.headers.referer || "unknown",
          },
          process.env.NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID,
          process.env.NOTIFY_REPORT_A_PROBLEM_EMAIL,
          process.env.NOTIFY_BASE_API_URL + "/v2/notifications/email",
          process.env.NOTIFY_API_KEY
        );

        if (notifyResponse[0] === 201) {
          res.status(200).end("OK");
        } else {
          console.error(notifyResponse[1]);
          res.status(500).end("ERROR");
        }
      } catch (e) {
        console.error(e);
        res.status(500).end("ERROR");
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
