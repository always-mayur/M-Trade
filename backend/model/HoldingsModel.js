const { model } = require("mongoose");
const mongoose = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel =mongoose.model("holding",HoldingsSchema);

module.exports = { HoldingsModel }; // This line is not needed in the ES6 module system