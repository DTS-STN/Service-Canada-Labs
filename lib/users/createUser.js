import cuid from "cuid";
import { Db, Collection } from "mongodb"; //lgtm [js/unused-local-variable]

/**
 * A function used to create a user
 * @param client {Db} - the connection object for the database
 * @param email {string} - the email for the user
 * @param data - the data for the user
 * @returns {Promise<Collection.insertWriteOpResult>}
 */
export async function createUser(client, email, data = {}) {
  return await client.collection("users").insertOne({
    cuid: cuid(),
    email: email,
    verified: false,
    ttl: 24 * 60 * 60, // 24 hours in seconds
    ...data,
  });
}
