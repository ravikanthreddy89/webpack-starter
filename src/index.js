var express = require("express");
var app = express();

const port = 8080;
//app.get("/", (req, res) => res.send("Hello World!"));

app.get("/react", (req, res) => {
  res.json({
    message: "hello world"
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
