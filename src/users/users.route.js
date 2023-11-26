const express = require("express");

//controllers
const {
  findAllUsers,
  createUsers,
  findOneUsers,
  updateUsers,
  usersDelete,
} = require("./users.controller");

const router = express.Router();

//Obtener la lista de los usuarios en la base de datos
router.get("/users", findAllUsers);

//Crear un nuevo usuario
router.post("/users", createUsers);

//Obtener un solo usuario dado un id
router.get("/users/:id", findOneUsers);

//Actualizar los datos de un usuario dado un id, solo puede actualizar su name y email
router.patch("/users/:id", updateUsers);

//Deshabilitar la cuenta de un usuario, cambiar status a disabled
router.delete("/users/:id", usersDelete);

module.exports = router;
