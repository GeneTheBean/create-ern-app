const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../../dist")));

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
