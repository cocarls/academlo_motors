const { Sequelize } = require("sequelize");
const envs = require("../enviroments/enviroments");

const sequelize = new Sequelize(envs.DB_URL, {
  logging: false,
});

const authenticated = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been estabilished successfully. :)");
  } catch (error) {
    console.log();
  }
};

const syncUp = async () => {
  try {
    await sequelize.sync();
    console.log("Connection has been synced successfully. :)");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sequelize,
  authenticated,
  syncUp,
};
