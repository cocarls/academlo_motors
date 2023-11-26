const repairsModel = require("./repairs.model");

class repairsServices {
  static async findAll() {
    return await repairsModel.findAll({
      where: {
        status: "pending",
      },
    });
  }

  static async create(data) {
    return await repairsModel.create(data);
  }

  static async findOne(id) {
    return await repairsModel.findOne({
      where: {
        id: id,
        status: "pending",
      },
    });
  }

  static async update(repair, data) {
    return await repair.update(data);
  }

  static async delete(repair) {
    return await repair.update({
      status: "cancelled",
    });
  }
}

module.exports = repairsServices;
