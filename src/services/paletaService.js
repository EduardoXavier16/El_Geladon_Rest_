const Paleta = require('../models/Paleta');

const findAllPaletasService = async () => {
  const allPaletas = await Paletas.find();
    return allPaletas;
};//Coferido!!!--->

const findByIdPaletaService = async (idParam) =>{
  const onePaleta = await Paletas.findById(idParam);
  return onePaleta;
};//Coferido!!!--->

const createPaletaService = (newPaleta) => {
  const createdPaleta = await Paleta.create(newPaleta)
  return createdPaleta;
};//Coferido!!!--->

const updatePaletaService = async (idParam, editPaleta) => {
  const updatePaleta = await Paleta.findByIdAndUpdate(idParam, editPaleta)
  return updatePaleta;
};//Coferido!!!--->

const deletePaletaService = async (idParam) => {
  return await Paletas.findByIdAndDelete(idParam)
};//Coferido!!!--->

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService
};//Coferido!!!--->
