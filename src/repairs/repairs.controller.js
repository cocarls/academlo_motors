const repairsServices = require("./repairs.services");

const findAllRepairs = async (req, res) => {
  try {
    const { requesTime } = req;

    const repairs = await repairsServices.findAll();
    return res.status(200).json({
      message: "method get findAll",
      requesTime,
      repairs,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
      error,
    });
  }
};

const createRepairs = async (req, res) => {
  try {
    const { requesTime } = req;
    const { date, userId } = req.body;

    const repairs = await repairsServices.create({
      date,
      userId,
    });

    return res.status(201).json({
      mesaage: "method post - create",
      requesTime,
      data: repairs,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
      error,
    });
  }
};

const findOneRepairs = async (req, res) => {
  try {
    const { requesTime } = req;
    const { id } = req.params;

    const repair = await repairsServices.findOne(id);

    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: `repairs with id: ${id} not found`,
        repair,
      });
    }
    return res.status(200).json({
      mesaage: "method get - findOne",

      requesTime,
      repair,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
      error,
    });
  }
};

const updateRepairs = async (req, res) => {
  try {
    const { requesTime } = req;
    const { id } = req.params;
    const { status } = req.body;

    const repair = await repairsServices.findOne(id);

    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: `repairs with id: ${id} not found`,
        repair,
      });
    }

    const repairsUpdate = await repairsServices.update(repair, {
      status,
    });

    return res.status(200).json({
      mesaage: "method patch - update",

      requesTime,
      repairsUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
      error,
    });
  }
};

const repairsDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await repairsServices.findOne(id);

    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: `repairs with id: ${id} not found`,
        repair,
      });
    }

    await repairsServices.delete(repair);

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
  findAllRepairs,
  createRepairs,
  findOneRepairs,
  updateRepairs,
  repairsDelete,
};
