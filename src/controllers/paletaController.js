const { default: mongoose } = require('mongoose');
const paletaService = require('../services/paletaService');

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletaServise.findAllPaletasService();
  if(allPaletas.lenght == 0) {
    return res.status(404).send({ message: 'Não existe nenhuma paleta cadastrada!'
    })
  }

  res.send(allPaletas);
};

const findByIdPaletaController = async (req, res) => {
  const parametroId = req.params.id;
  const chosenPaleta = await paletaService.findByIdPaletaService(parametroId);
  if(!chosenPaleta){
    return res.status(404).send({ message: 'Paleta não encontrada!'});
  }

  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;
  const newPaleta = await paletaService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const parametroId = req.params.id;
  const editPaleta = req.body;
  const updatedPaleta = await paletaService.updatePaletaService(
    parametroId,
    editPaleta,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const parametroId = req.params.id;
  await paletaService.deletePaletaService(parametroId);

  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!'});
  }
  res.send({ messsege: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};

//Arquivo pronto!!!---->
