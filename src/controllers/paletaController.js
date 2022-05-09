const mongoose = require('mongoose');
const paletaService = require('../services/paletaService');//Conferido!!!--->

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletaServise.findAllPaletasService();
  if(allPaletas.lenght == 0) {
    return res.status(404).send({ message: 'Não existe nenhuma paleta cadastrada!'
    })
  }

  res.send(allPaletas);
};//Conferido!!!--->

const findByIdPaletaController = async (req, res) => {
  const IdParam = req.params.id;
  const chosenPaleta = await paletaService.findByIdPaletaService(IdParam);

  if(!chosenPaleta){
    return res.status(404).send({ message: 'Paleta não encontrada!'});
  }

  res.send(chosenPaleta);
};//Conferido!!!--->

const createPaletaController = async (req, res) => {
  const paleta = req.body;
  const newPaleta = await paletaService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};//Conferido!!!--->

const updatePaletaController = async (req, res) => {
  const IdParam = req.params.id;
  const editPaleta = req.body;
  const updatedPaleta = await paletaService.updatePaletaService(
    IdParam,
    editPaleta,
  );
  res.send(updatedPaleta);
};//Conferido!!!--->

const deletePaletaController = async (req, res) => {
  const IdParam = req.params.id;
  await paletaService.deletePaletaService(IdParam);
  res.send({ messsege: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};//Conferido!!!--->

//Arquivo pronto!!!---->
