import { Db } from "mongodb"; //lgtm [js/unused-local-variable]

/**
 * A function used to unsubscribe a user
 * @param client {Db} - the connection object for the database
 * @param cuid {string} - the cuid for the user
 * @returns {Promise<Collection.insertWriteOpResult>}
 */
export async function unsubscribeUser(client, cuid) {
  return await client.collection("users").findOneAndUpdate(
    { cuid },
    {
      $unset: {
        verified: "",
        yearOfBirth: "",
        language: "",
        province: "",
        gender: "",
        genderOtherDetails: "",
        nativeStatus: "",
        disability: "",
        disabilityDetails: "",
        minority: "",
        minorityGroup: "",
        minorityGroupOther: "",
        incomeLevel: "",
        agreeToConditions: "",
        ttl: "",
      },
      $set: {
        email: cuid,
      },
    },
    {
      returnDocument: "after",
    }
  );
}
