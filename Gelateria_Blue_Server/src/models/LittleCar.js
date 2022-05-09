const mongoose = require('mongoose');

const LittleCarSchema = new mongoose.Schema({
    paletaId: {
        type: String,
        require: true
    },
    quantidade: {
        type: Number,
        require: true
    },
});

const LittleCar = mongoose.model('littleCar', LittleCarSchema);

module.exports = LittleCar;

