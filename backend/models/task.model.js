const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let TaskSchema = new Schema({
    task: {type: String, required: true},
    data: {type: Date, required: true},
    feito: {type: Boolean, required: true},
});
// Exportar o modelo
module.exports = mongoose.model('Task', TaskSchema);
