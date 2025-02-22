const { Schema } = require('mongoose');
 // const { HoldingsModel } = require('../model/HoldingsModel');

const HoldingsSchema = new Schema({
    name: String ,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean
      
})

 // export default HoldingsSchema;
module.exports = {HoldingsSchema}; // This line is not needed in the ES6 module system