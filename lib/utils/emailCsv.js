import { scheduleJob } from "node-schedule";

export const job = scheduleJob("*/1s * * * *", () => {
  console.log(`The time is ${Date.now}`);
});
