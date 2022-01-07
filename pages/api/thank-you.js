import { submitEmail } from "../../lib/notify/submitEmail";
import { connectToDatabase } from "../../lib/mongodb/connect";
import { getUserByEmail } from "../../lib/users/getUser";

export default async function handler(req, res) {
  // this route only accepts a POST method
  if (req.method === "POST") {
    const email = req.body.email;
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      process.env.MONGO_DB
    );
    let user;
    let userCuid;
    let language;
    let origin;

    // attempt to get user by email
    try {
      origin = req.headers.origin;
      user = await getUserByEmail(conn.db, email);
      userCuid = user.cuid;
      language = user.language;
    } catch (e) {
      if (e.message.includes("key")) {
        return res.status(400).json({
          reason: "MongoError",
          message: e.message,
        });
      }
      return res.status(500).json({
        reason: "MongoError",
        message: e.message,
      });
    }

    //attempt to send validation email through notify
    try {
      const validationUrl =
        origin + `/api/validate?id=${userCuid}&lang=${language}`;
      const unsubUrl = origin + `/api/unsubscribe?id=${userCuid}`;
      const [status, json] = await submitEmail(
        {
          validation_url: validationUrl,
          unsubscribe_url: unsubUrl,
        },
        {},
        language === "fr"
          ? process.env.USER_SIGNUP_FRENCH_TEMPLATE_ID
          : process.env.USER_SIGNUP_ENGLISH_TEMPLATE_ID,
        email,
        process.env.NOTIFY_BASE_API_URL + "/v2/notifications/email",
        process.env.NOTIFY_API_KEY
      );

      // non okay status code return 500
      if (status >= 300) {
        await conn.db.collection("users").deleteOne({
          cuid: userCuid,
        });
        return res.status(500).json({
          reason: "Notify",
          explanation:
            "Notify failed to send the validation email: " +
            JSON.stringify(json),
        });
      }
    } catch (e) {
      await conn.db.collection("users").deleteOne({
        cuid: userCuid,
      });
      return res.status(500).json({
        reason: "Notify",
        explanation: e.message,
      });
    }

    res.status(201).end("USER CREATED");
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
