export default async function handler(req, res) {
  if (process.env.hasOwnProperty("GITHUB_SHA")) {
    return res.status(200).json({
      version: process.env.GITHUB_SHA,
    });
  }

  return res.status(500).json({
    version: "undeclared",
  });
}
