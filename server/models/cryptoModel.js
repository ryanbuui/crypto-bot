const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
  name: { tpye: String, required: true },
});

const Crypto = mongoose.model("crypto", cryptoSchema);

module.exports = Crypto;