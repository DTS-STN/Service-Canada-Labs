import { submitEmail } from "../../lib/notify/submitEmail";
import { createUser } from "../../lib/users/createUser";
import { connectToDatabase } from "../../lib/mongodb/connect";
import Joi from "joi";
import validate from "../../middlewares/joi";

async function handler(req, res) {
  // feature flag
  if (!process.env.USER_SIGNUP_ENABLED) {
    return res.status(200).end("NOT ENABLED");
  }

  // this route only accepts a POST method
  if (req.method === "POST") {
    let data = req.body;
    data.yearOfBirthRange = convertYearOfBirth(data.yearOfBirthRange);
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      process.env.MONGO_DB
    );
    let userCreationObj;
    let userCuid;
    let origin;

    // attempt to create user
    // we don't have to worry about duplicates here since we create an index on email field and add a unique constraint
    // no need to check if a user already exists with the same email
    // if they do then the insert will fail
    try {
      const yearOfBirth = "";
      let extraData = { yearOfBirth, ...data };
      origin = req.headers.origin;
      delete extraData.email;

      userCreationObj = await createUser(conn.db, data.email, extraData);
      userCuid = userCreationObj.ops[0].cuid;
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
        origin + `/api/validate?id=${userCuid}&lang=${data.language}`;
      const unsubUrl = origin + `/api/unsubscribe?id=${userCuid}`;
      const [status, json] = await submitEmail(
        {
          validation_url: validationUrl,
          unsubscribe_url: unsubUrl,
        },
        {},
        data.language === "fr"
          ? process.env.USER_SIGNUP_FRENCH_TEMPLATE_ID
          : process.env.USER_SIGNUP_ENGLISH_TEMPLATE_ID,
        data.email,
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

const schema = Joi.object({
  language: Joi.string().valid("en", "fr").required(),
  email: Joi.string().email().required(),
});

export default validate(schema, handler, {
  abortEarly: false,
  allowUnknown: true,
});

function convertYearOfBirth(yearRange) {
  const years = yearRange.split("-");
  let allYears = [];
  for (let i = parseInt(years[0]); i <= parseInt(years[1]); i++) {
    allYears.push(i);
  }
  return allYears;
}
