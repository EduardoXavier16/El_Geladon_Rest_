const { default: mongoose } = require('mongoose');
const paletaService = require('../services/paletaService');

const findAllPaletasController = async (req, res) => {
  const paletas = await paletaServise.findAllPaletasService();

  if(paletas.lenght == 0) {
    return res.status(404).send({ message: 'Não existe nenhuma paleta cadastrada!'
    })
  }

  res.send(paletas);
};

const findByIdPaletaController = async (req, res) => {
  const parametroId = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(parametroId)){
    return res.status(400).send({ message: 'Id inválido!'});
  }

  const escolhaPaleta = await paletaService.findByIdPaletaService(parametroId);

  if(!escolhaPaleta){
    return res.status(404).send({ message: 'Paleta não encontrada!'});
  }

  res.send(escolhaPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;

  if(!paleta 
    || !paleta.sabor 
    || !paleta.descricao 
    || !paleta.foto 
    || !paleta.preco
    ){
    return res.status(400).send({message: "Envie todos os campos da paleta!"})
  }
  const newPaleta = await paletaService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const parametroId = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(parametroId)){
    return res.status(400).send({ message: 'Id inválido!'});
  }

  const paletaEdit = req.body;

  if(!paletaEdit 
    || !paletaEdit.sabor 
    || !paletaEdit.descricao 
    || !paletaEdit.foto 
    || !paletaEdit.preco
    ){
    return res.status(400).send({message: "Envie todos os campos da paleta!"})
  }
  const updatedPaleta = await paletaService.updatePaletaService(
    parametroId,
    paletaEdit,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const parametroId = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(parametroId)){
    return res.status(400).send({ message: 'Id inválido!'});
  }
  await paletaService.deletePaletaService(parametroId);

  if (!escolhaPAleta) {
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
