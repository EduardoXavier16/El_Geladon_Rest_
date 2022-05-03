const paletaService = require('../services/paletaService');

const findAllPaletasController = (req, res) => {
  const paletas = paletaServise.findAllPaletasService();

  if(paletas.lenght == 0) {
    return res.status(404).send({ message: 'Não existe nenhuma paleta cadastrada!'
    })
  }

  res.send(paletas);
};

const findByIdPaletaController = (req, res) => {
  const parametroId = Number(req.params.id);

  if(!parametroId){
    return res.status(400).send({ message: 'Id inválido!'});
  }

  const escolhaPaleta = paletaService.findByIdPaletaService(parametroId);

  if(!escolhaPaleta){
    return res.status(404).send({ message: 'Paleta não encontrada!'});
  }

  res.send(escolhaPaleta);
};

const createPaletaController = (req, res) => {
  const paleta = req.body;

  if(!paleta 
    || !paleta.sabor 
    || !paleta.descricao 
    || !paleta.foto 
    || !paleta.preco
    ){
    return res.status(400).send({message: "Envie todos os campos da paleta!"})
  }
  const newPaleta = paletaService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const parametroId = Number(req.params.id);

  if (!parametroId) {
    return res.status(400).send({ message: 'Id inválido!'});  
  };

  const paletaEdit = req.body;

  if(!paletaEdit 
    || !paletaEdit.sabor 
    || !paletaEdit.descricao 
    || !paletaEdit.foto 
    || !paletaEdit.preco
    ){
    return res.status(400).send({message: "Envie todos os campos da paleta!"})
  }
  const updatedPaleta = paletaService.updatePaletaService(
    parametroId,
    paletaEdit,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const parametroId = Number(req.params.id);
  if (!parametroId) {
    return res.status(400).send({ message: 'I inválido'})
  }
  const escolhaPAleta = paletaService.deletePaletaService(parametroId);

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
