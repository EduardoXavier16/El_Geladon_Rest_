const littleCarService = require('../services/littleCarService');

const findAllLittleCarController = async (req, res) => {
  const allLittleCar = await littleCarService.findAllLittleCarService();
  if (!allLittleCar) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item no carrinho!' });
  }
  res.send(allLittleCar);
};

const createManyItensLittleCarController = async (req, res) => {
  const littleCar = req.body;
  const newLittleCar = await littleCarService.deleteAllItensLittleCarService(
    littleCar,
  );
  res.status(201).send(newLittleCar);
};

const deleteAllItensLittleCarController = async (req, res) => {
  await littleCarService.deleteAllItensLittleCarService();
  res.send({ message: 'Carrinho finalizado com sucesso!' });
};

module.exports = {
  findAllLittleCarController,
  createManyItensLittleCarController,
  deleteAllItensLittleCarController,
};
