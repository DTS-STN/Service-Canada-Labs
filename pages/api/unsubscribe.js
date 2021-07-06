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
      const conn = await connectToDatabase(
        process.env.MONGO_URL,
        process.env.MONGO_DB
      );
      try {
        userObj = await getUserByEmail(conn.db, data.email);
      } catch (e) {
        console.log(e);
        return res.redirect("/error");
      }

      if (userObj) {
        // attempt to send validation email through notify
        try {
          const unsubscribeUrl = origin + `/api/unsubscribe?id=${userObj.cuid}`;
          const [status, json] = await submitEmail(
            {
              unsubscribe_url: unsubscribeUrl,
            },
            {},
            data.language === "fr"
              ? process.env.USER_UNSUBSCRIBE_FRENCH_TEMPLATE_ID
              : process.env.USER_UNSUBSCRIBE_ENGLISH_TEMPLATE_ID,
            data.email,
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
        return res.status(201).end("USER UNSUBSCRIBE EMAIL SENT");
      }
    }
    return res.status(400).end("Missing email");
  } else if (req.method === "GET") {
    const id = req.query.id || "";
    let unsubUserObj;

    if (id) {
      const conn = await connectToDatabase(
        process.env.MONGO_URL,
        process.env.MONGO_DB
      );
      try {
        unsubUserObj = await unsubscribeUser(conn.db, id);
        if (Object.keys(unsubUserObj.value).length === 2) {
          // TODO: create delete confirmation page
          return res.redirect("/home");
        } else {
          // if the record isn't deleted return an error
          return res.redirect(`/error`);
        }
      } catch (e) {
        console.log(e);
        return res.redirect("/error");
      }
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
