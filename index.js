const express = require("express")

const PORT = 8080
const app = express();

app.use("/csp-report", express.json({
  type: "application/csp-report"
}), (request, response) => {
  const { referrer } = request.body['csp-report']
  console.log({
    cspReferrer: referrer,
    userAgent: request.headers['user-agent']
  })
  response.send('OK')
});

app.use("/a", (request, response) => {
  response.send(`
    <iframe src="http://127.0.0.1.xip.io:${PORT}/b"></iframe>
  `)
});

app.use("/b", (request, response) => {
  response.setHeader('Content-Security-Policy', `default-src 'none'; frame-ancestors 'none'; report-uri http://127.0.0.1.xip.io:${PORT}/csp-report`)
  response.setHeader('Content-Type', 'text/html')
  response.send("OK")
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/a`)
});
