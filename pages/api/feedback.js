import { submitEmail } from "../../lib/notify/submitEmail";
import Joi from "joi";
import validate from "../../middlewares/joi";

async function handler(req, res) {
  // this route only accepts a POST method
  if (req.method === "POST") {
    let data = req.body;

    // attempt to send feedback email through notify
    try {
      const [status, json] = await submitEmail(
        {
          project: data.project,
          pageUrl: data.pageUrl,
          feedback: data.feedback,
        },
        {},
        process.env.USER_FEEDBACK_TEMPLATE_ID,
        process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL, // for now it's the same email
        process.env.NOTIFY_BASE_API_URL + "/v2/notifications/email",
        process.env.NOTIFY_API_KEY
      );

      // non okay status code return 500
      if (status >= 300) {
        return res.status(500).json({
          reason: "Notify",
          explanation:
            "Notify failed to send the validation email: " +
            JSON.stringify(json),
        });
      }
    } catch (e) {
      return res.status(500).json({
        reason: "Notify",
        explanation: e.message,
      });
    }

    res.status(201).end("FEEDBACK SUBMITTED");
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const schema = Joi.object({
  project: Joi.string().required(),
  pageUrl: Joi.string().uri().required(),
  feedback: Joi.string().required(),
});

export default validate(schema, handler, {
  abortEarly: false,
  allowUnknown: true,
});
