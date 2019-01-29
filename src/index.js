var express = require("express");
var app = express();

const port = 8080;
//app.get("/", (req, res) => res.send("Hello World!"));

app.use(express.static('dist'));

app.get("/react", (req, res) => {
  res.sendFile('/dist/index.html', {'root': '.'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
