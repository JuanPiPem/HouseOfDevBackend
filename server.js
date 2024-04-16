const express = require("express");
const logger = require("morgan");
const app = express();
const db = require("./api/config/db.config");

app.use(express.json());
app.use(logger("dev"));

db.sync({ force: false }).then(() => {
  app.listen(8080, () => console.log(`Servidor en el puerto 8080`));
});
module.exports = app;
