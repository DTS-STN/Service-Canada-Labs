/**
 * API handler for report a problem functionality. This will take form submissions
 * and call GC Notify service with the appropriate template and data
 */
async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    res.status(200).end("OK");
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
