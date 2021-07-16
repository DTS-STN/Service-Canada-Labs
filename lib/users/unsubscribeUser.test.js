import { closeConnection, connectToDatabase } from "../mongodb/connect";
import { unsubscribeUser } from "./unsubscribeUser";
import cuid from "cuid";

describe("unsubscribeUser functions", () => {
  let users;
  let cUID1, cUID2;
  let db;
  let connectClient;

  beforeAll(async () => {
    cUID1 = cuid();
    cUID2 = cuid();
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      "testdbunsubuser"
    );
    db = conn.db;
    connectClient = conn;
    users = await db.collection("users").insertMany([
      {
        cuid: cUID1,
        email: "test@email.com",
        verified: false,
        yearOfBirth: 1990,
        language: "en",
        province: "QC",
        gender: "other",
        genderOtherDetails: "test",
        nativeStatus: "inuit",
        disability: "yes",
        disabilityDetails: "tests test",
        minority: "yes",
        minorityGroup: [
          "black",
          "chinese",
          "filipino",
          "japanese",
          "korean",
          "southAsian",
          "southeastAsian",
          "nonWhiteAAA",
          "latinAmerican",
          "mixedOrigin",
          "other",
        ],
        minorityGroupOther: "another",
        incomeLevel: "100kto150k",
        agreeToConditions: "yes",
      },
      { cuid: cUID2, email: "another@email.com" },
    ]);
  });

  afterAll(async () => {
    await db.dropDatabase();
    await closeConnection();
  });

  it("unsub user by cuid", async () => {
    const unsubResult = await unsubscribeUser(db, cUID1);

    expect(unsubResult.value.cuid).toEqual(cUID1);
    expect(unsubResult.value.email).toEqual(cUID1);
    expect(unsubResult.value.verified).toEqual(undefined);
    expect(unsubResult.value.yearOfBirth).toEqual(undefined);
    expect(unsubResult.value.language).toEqual(undefined);
    expect(unsubResult.value.province).toEqual(undefined);
    expect(unsubResult.value.gender).toEqual(undefined);
    expect(unsubResult.value.genderOtherDetails).toEqual(undefined);
    expect(unsubResult.value.nativeStatus).toEqual(undefined);
    expect(unsubResult.value.disability).toEqual(undefined);
    expect(unsubResult.value.disabilityDetails).toEqual(undefined);
    expect(unsubResult.value.minority).toEqual(undefined);
    expect(unsubResult.value.minorityGroup).toEqual(undefined);
    expect(unsubResult.value.minorityGroupOther).toEqual(undefined);
    expect(unsubResult.value.incomeLevel).toEqual(undefined);
    expect(unsubResult.value.agreeToConditions).toEqual(undefined);
  });
});
