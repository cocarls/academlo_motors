const express = require("express");

//controller
const {
  findAllRepairs,
  createRepairs,
  findOneRepairs,
  updateRepairs,
  repairsDelete,
} = require("./repairs.controller");

const router = express.Router();

//Obtener la lista de motos pendientes (pending) de reparar
router.get("/repairs", findAllRepairs);

//Crear una cita,
router.post("/repairs", createRepairs);

//Obtener una moto pendiente de reparar por su id
router.get("/repairs/:id", findOneRepairs);

//Actualizar el status de una reparación ha completado (cambiar status a completed)
router.patch("/repairs/:id", updateRepairs);

//Cancelar la reparación de un usuario (cambiar status a cancelled)
router.delete("/repairs/:id", repairsDelete);

module.exports = router;
