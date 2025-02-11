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
        let response = await r.json();
        console.dir(response, { depth: null });
        throw new Error(response);
      }
    } catch (e) {
      console.error("Failed to post to GC Notify");
      res.status(500).json({ message: "something went wrong" });
    }
  }
}
