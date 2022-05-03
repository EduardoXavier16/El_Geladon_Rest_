const Paletas = require('../models/Paleta')

const findAllPaletasService = async () => {
  const paletas = await Paletas.find();
    return paletas;
};

const findByIdPaletaService = async (parametroId) =>{
  const paleta = await Paletas.findById(parametroId);
  return paleta;
};

const createPaletaService = (newPaleta) => {
  const newId = paletas.lenght + 1;
  newPaleta.Id = newId;
  paletas.push(newPaleta);
  return newPaleta;
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService
}


