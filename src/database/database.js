const mongoose = require ('mongoose');

const connectToDatabase = () => {
    mongoose.connect('mongodb+srv://edw_user:Ea291014@api-gelateria-blue.f0wqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,  
    })
    .then(() => console.log('MongoDB Conectado!'))
    .catch((error) => console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
