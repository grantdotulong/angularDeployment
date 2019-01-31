var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://localhost/beltExam');


autoIncrement.initialize(connection);

var productSchema = new mongoose.Schema({
    name: {
        type: String, 
        minlength: [4, 'Name must be more than 4 characters long!'], 
        required: [true, 'Product name is required'],
        default: null,
    },
    quantity: {type: Number, required: [true, 'Quantity must be included'],  min: [0, 'quantity must be a positive number'],default: null},
    price: {
        type: Number, 
        required: [true,'Price must be included'],
        default: null,
    },
},{timestamps: true})

productSchema.plugin(autoIncrement.plugin, 'product');
mongoose.model('product', productSchema);
var Product = connection.model('product', productSchema);

module.exports = Product;