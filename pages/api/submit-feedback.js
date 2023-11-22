import { postFeedbackToGcNotify } from "../../lib/notify/postFeedbackToGcNotify";

export default async function handler(req, res) {
  const data = req.body;
  console.log(process.env)
  if (!data["what-was-wrong"]) {
    res.status(400).json({ message: "required field missing" });
  } else {
    try {
      let r = await postFeedbackToGcNotify(data);
      if (r.ok) {
        res.status(200).json(data);
      } else {
        throw new Error("bad request");
      }
    } catch (e) {
      console.error("Failed to post to GC Notify", e);
      res.status(500).json({ message: "something went wrong" });
    }
  }
}
