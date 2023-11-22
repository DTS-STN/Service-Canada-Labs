import { postFeedbackToGcNotify } from "../../lib/notify/postFeedbackToGcNotify";

export default async function handler(req, res) {
  const data = req.body;

  if (!data["what-was-wrong"]) {
    res.status(400).json({ message: "required field missing" });
  } else {
    try {
      let r = await postFeedbackToGcNotify(data);

      if (r.ok) {
        res.status(200).json(data);
      } else {
        throw new Exception("bad request");
      }
    } catch (e) {
      console.log(process.env.NOTIFY_FEEDBACK_TEMPLATE_ID);
      console.error(e);
      res.status(500).json({ message: "something went wrong" });
    }
  }
}
