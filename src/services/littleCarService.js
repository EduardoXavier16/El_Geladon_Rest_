const LittleCar = require('../models/LittleCar');

const findAllLittleCarService = async () => {
  const allLittleCar = await LittleCar.find();
  return allLittleCar;
};

const createManyItensLittleCarService = async (newLittleCar) => {
  const createdLittleCar = LittleCar.insertMany(newLittleCar);
  return createdLittleCar;
};

const deleteAllItensLittleCarService = async () => {
  return await LittleCar.deleteMany();
};

module.exports = {
  findAllLittleCarService,
  createManyItensLittleCarService,
  deleteAllItensLittleCarService,
};
