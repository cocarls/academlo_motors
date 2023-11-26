require("dotenv").config(); // sirve para utilizar las variables de entorno

const env = require("env-var"); //sirve para validar las variables de entorno

const envs = {
  PORT: env.get("port").required().asPortNumber(),
  DB_URL: env.get("DB_URL").required().asString(),
};

module.exports = envs;
