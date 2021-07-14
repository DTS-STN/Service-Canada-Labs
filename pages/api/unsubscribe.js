import { connectToDatabase } from "../../lib/mongodb/connect";
import { unsubscribeUser } from "../../lib/users/unsubscribeUser";
import { getUserByEmail } from "../../lib/users/getUser";
import { submitEmail } from "../../lib/notify/submitEmail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = req.body;
    let userObj;
    const origin = req.headers.origin;
    if (data.email) {
      try {
        const conn = await connectToDatabase(
          process.env.MONGO_URL,
          process.env.MONGO_DB
        );
        userObj = await getUserByEmail(conn.db, data.email);
      } catch (e) {
        console.log(`Mongo error: ${e.message}`);
        return res.redirect("/error");
      }

      if (userObj) {
        // attempt to send validation email through notify
        try {
          const unsubscribeUrl =
            origin +
            `/api/unsubscribe?id=${userObj.cuid}&lang=${userObj.language}`;
          const [status, json] = await submitEmail(
            {
              unsubscribe_url: unsubscribeUrl,
            },
            {},
            userObj.language === "fr"
              ? process.env.USER_UNSUBSCRIBE_FRENCH_TEMPLATE_ID
              : process.env.USER_UNSUBSCRIBE_ENGLISH_TEMPLATE_ID,
            data.email,
            process.env.NOTIFY_BASE_API_URL + "/v2/notifications/email",
            process.env.NOTIFY_API_KEY
          );

          // non okay status code return 500
          if (status >= 300) {
            console.log(`Notify failed to send the unsubscribe email: ${json}`);
            return res.status(500).json({
              reason: "Notify",
              explanation:
                "Notify failed to send the unsubscribe email: " +
                JSON.stringify(json),
            });
          }
        } catch (e) {
          console.log(`Notify error: ${e.message}`);
          return res.status(500).json({
            reason: "Notify",
            explanation: e.message,
          });
        }
        return res.status(201).end("USER UNSUBSCRIBE EMAIL SENT");
      }
    }
    return res.status(400).end("Missing email");
  } else if (req.method === "GET") {
    const id = req.query.id || "";
    const lang = req.query.lang || "";
    let unsubUserObj;

    if (id) {
      try {
        const conn = await connectToDatabase(
          process.env.MONGO_URL,
          process.env.MONGO_DB
        );
        unsubUserObj = await unsubscribeUser(conn.db, id);
        if (Object.keys(unsubUserObj.value).length === 2) {
          return res.redirect(
            `${lang === "fr" ? "/fr" : ""}/confirmation?ref=unsubscribe`
          );
        } else {
          // if the record isn't deleted return an error
          return res.redirect(`/error`);
        }
      } catch (e) {
        console.log(`Mongo error: ${e.message}`);
        return res.redirect("/error");
      }
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
