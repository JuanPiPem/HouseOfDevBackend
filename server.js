const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();

const db = require("./api/config/db.config");
const User = require("./api/models/User.models");

app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

db.sync({ force: false }).then(() => {
  app.listen(8080, () => console.log(`Servidor en el puerto 8080`));
});
module.exports = app;
