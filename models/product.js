const mongoose = require('mongoose');
// creating an employee schema in mongodb
const proSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    }
})

const pro = mongoose.model('Product', proSchema);

module.exports = pro;