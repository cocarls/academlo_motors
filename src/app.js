const express = require("express");
const users = require("./users/users.route");
const repairs = require("./repairs/repairs.route");

const app = express();

const claculateRequesTime = (req, res, next) => {
  const requesTime = new Date().toISOString();
  req.requesTime = requesTime;
  next();
};

app.use(express.json()); //permitir obtener el body en formato json
app.use(express.urlencoded({ extended: true })); //permitir obtener el body en formato url-encoded

app.use(claculateRequesTime);

app.use("/api/v1", users);
app.use("/api/v1", repairs);

module.exports = app;
