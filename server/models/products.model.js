// <!-- import mongoose to build a model -->
const mongoose = require('mongoose');


// <!-- the schema is next. schema is the rules that the entries in the db must follow  -->
const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
}, {timestamps: true});

// <!-- the model. this is what we use to make actual queries to the DB -->
const Product = mongoose.model('Product', ProductSchema);

// <!-- export the model -->
module.exports = Product;