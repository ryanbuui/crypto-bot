const router = require("express").Router();
const Crypto = require("../models/cryptoModel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const {name} = req.body;

    const newCrypto = new Crypto({
      name
    });

    const savedCrypto = await newCrypto.save();
    
    res.json(savedCrypto);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
})

router.get("/", auth, async (req, res) => {
  try {
    const cryptos = await Crypto.find();
    res.json(cryptos);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;