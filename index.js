const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/paletaRoute');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/paletas', routes);

// app.use(function(req, res, next) {
//   const err = new Error('Não Encontrado!');
//   err.status = 404;
//   next(err);
// })

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
