import { Db } from "mongodb"; //lgtm [js/unused-local-variable]

/**
 * A function to get a user by their id
 * @param client {Db} - the mongodb Db object for the connected database
 * @param cuid {string} - the cuid of the user
 * @returns {Promise<void>}
 */
export async function getUserByCUID(client, cuid) {
  // get the users collection object
  const usersCollection = client.collection("users");
  return await usersCollection.findOne({ cuid });
}

/**
 * A function to get a user by their email
 * @param client {Db} - the mongodb Db object for the connected database
 * @param email {string} - the email of the user
 * @returns {Promise<void>}
 */
export async function getUserByEmail(client, email) {
  const userCollection = client.collection("users");
  return await userCollection.findOne({ email: email });
}

export async function getUsers(client) {
  const userCollection = client.collection("users");
  return await userCollection.find({});
}
