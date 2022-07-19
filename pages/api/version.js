export default async function handler(req, res) {
  if (process.env.hasOwnProperty("GIT_SHA")) {
    return res.status(200).json({
      version: process.env.GIT_SHA,
    });
  }

  return res.status(500).json({
    version: "undeclared",
  });
}
