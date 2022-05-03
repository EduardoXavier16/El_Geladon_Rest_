const Paleta = require('../models/Paleta');
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
  const paletaCreated = await Paleta.create(newPaleta)
  return paletaCreated;
};

const updatePaletaService = async (id, paletaEdited) => {
  const paletaCreated = await Paleta.findByIdAndUpdate(id, paletaEdited)
  return paletaCreated;
};

const deletePaletaService = async (id) => {
  return await Paletas.findByIdAndDelete(id)
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService
}


