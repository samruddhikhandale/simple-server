const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const app = express();
const port = 80;

const privateKey = fs.readFileSync('sslcert/key.pem');
const certificate = fs.readFileSync('sslcert/cert.pem');
const credentials = {key: privateKey, cert: certificate};

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}/`));

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
  console.log("Example app listening on port https://localhost:443/")
});