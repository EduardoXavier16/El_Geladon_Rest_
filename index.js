const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();
const route = require('./src/routes/paletas.route');

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/paletas', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
