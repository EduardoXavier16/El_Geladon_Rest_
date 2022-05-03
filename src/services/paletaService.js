const paletas = [
    {
      id: 1,
      sabor: 'Açaí com Leite Condensado',
      descricao:
        'Picolé sabor açaí, recheado com leite consado.',
      foto: './assets/images/acai-com-leite-condensado.png',
      preco: 10.0,
    },
    {
      id: 2,
      sabor: 'Banana com Nutella',
      descricao:
        'Picolé sabor banana com recheio em nutella.',
      foto: './assets/images/banana-com-nutella.png',
      preco: 10.0,
    },
    {
      id: 3,
      sabor: 'Chocolate Belga',
      descricao:
        'Picolé todo feito do mais delícioso chocolate belga.',
      foto: './assets/images/chocolate-belga.png',
      preco: 7.0,
    },
    {
      id: 4,
      sabor: 'Limao',
      descricao:
        'Picolé delícioso, todo em limão.',
      foto: './assets/images/limao.png',
      preco: 6.0,
    },
    {
      id: 5,
      sabor: 'Milho verde',
      descricao:
        'Picolé delícioso, todo feito em milho verde.',
      foto: './assets/images/milho-verde.png',
      preco: 9.0,
    },
    {
      id: 6,
      sabor: 'Uva',
      descricao:
        'Delícioso picolé, todo em sabor uva.',
      foto: './assets/images/uva.png',
      preco: 7.0,
    },
    {
      id: 7,
      sabor: 'Morango',
      descricao:
        'O melhor de todos! O picolé mais delicioso todo em morango.',
      foto: './assets/images/morango.png',
      preco: 13.0,
    },
  ];

const findAllPaletasService = () => {
    return paletas;
};

const findByIdPaletaService = (parametroId) =>{
  return paletas.find((paleta) => paleta.id === parametroId);
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


