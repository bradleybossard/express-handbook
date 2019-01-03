const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  // console.log('req', req);
  console.log("app", req.app);
  console.log("baseUrl", req.baseUrl);
  console.log("body", req.body);
  console.log("cookies", req.cookies);
  console.log("hostname", req.hostname);
  console.log("ip", req.ip);
  console.log("method", req.method);
  console.log("params", req.params);
  console.log("path", req.path);
  console.log("protocol", req.protocol);
  console.log("query", req.query);
  console.log("secure", req.secure);
  console.log("signedCookies", req.signedCookies);
  console.log("xhr", req.xhr);
  res.send("Hello World!");
});

app.listen(3000, () => console.log("Server ready"));
