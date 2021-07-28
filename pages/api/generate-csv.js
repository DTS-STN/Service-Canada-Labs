import { connectToDatabase } from "../../lib/mongodb/connect";
import { getVerifiedUsers } from "../../lib/users/getUser";
import { parse } from "json2csv";
import { submitEmailWithAttachment } from "../../lib/notify/submitEmail";

export default async function handler(req, res) {
  const auth = req.headers.authorization;
  if (auth === process.env.CSV_AUTH_KEY && auth !== undefined) {
    let users;
    try {
      const conn = await connectToDatabase(
        process.env.MONGO_URL,
        process.env.MONGO_DB
      );
      users = await getVerifiedUsers(conn.db);
    } catch (e) {
      console.log(`Mongo error: ${e.message}`);
      return res.redirect("/error");
    }
    try {
      const csvData = parse(await users.toArray());
      const base64Data = toBase64(csvData);
      const date = new Date().toLocaleDateString("en-CA");
      const [status, json] = await submitEmailWithAttachment(
        {
          date_generated: date,
        },
        {},
        process.env.USER_CSV_TEMPLATE_ID,
        process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL, // for now it's the same email
        base64Data,
        `users-${date}.csv`,
        process.env.NOTIFY_BASE_API_URL + "/v2/notifications/email",
        process.env.NOTIFY_API_KEY
      );
      if (status >= 300) {
        console.log(`Notify failed to send the csv: ${JSON.stringify(json)}`);
        return res.status(500).json({
          reason: "Notify",
          explanation: "Notify failed to send the csv: " + JSON.stringify(json),
        });
      }
    } catch (e) {
      console.log("Notify error: " + e);
    }
    return res.status(201).end("USER CSV SENT");
  }
  res.status(403).end(`Unauthorized`);
}

const toBase64 = (data) => {
  const b = Buffer.from(data);
  return b.toString("base64");
};
