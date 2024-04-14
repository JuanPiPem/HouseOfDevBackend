const express = require("express");
const logger = require("morgan");
const app = express();

app.use(express.json());
app.use(logger("dev"));

app.listen(8080, () => {
  console.log("Server listening in port 8080");
});
