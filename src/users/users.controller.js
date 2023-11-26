const usersServices = require("./users.services");

const findAllUsers = async (req, res) => {
  try {
    const { requesTime } = req;

    const users = await usersServices.findAll();
    return res.status(200).json({
      message: "method get findAll",
      requesTime,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
      error,
    });
  }
};

const createUsers = async (req, res) => {
  try {
    const { requesTime } = req;
    const { name, password, email } = req.body;

    const users = await usersServices.create({
      name,
      password,
      email,
    });

    return res.status(201).json({
      mesaage: "method post - create",
      requesTime,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
      error,
    });
  }
};

const findOneUsers = async (req, res) => {
  try {
    const { requesTime } = req;
    const { id } = req.params;

    const user = await usersServices.findOne(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `User with id: ${id} not found`,
      });
    }

    return res.status(200).json({
      mesaage: "method get - findOne",

      requesTime,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
      error,
    });
  }
};

const updateUsers = async (req, res) => {
  try {
    const { requesTime } = req;
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await usersServices.findOne(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `User with id: ${id} not found`,
      });
    }

    const userUpdate = await usersServices.update(user, {
      name,
      email,
    });

    return res.status(200).json({
      mesaage: "method patch - update",

      requesTime,
      userUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
      error,
    });
  }
};

const usersDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await usersServices.findOne(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `User with id: ${id} not found`,
      });
    }

    await usersServices.delete(user);

    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
      error,
    });
  }
};

module.exports = {
  findAllUsers,
  createUsers,
  findOneUsers,
  updateUsers,
  usersDelete,
};
