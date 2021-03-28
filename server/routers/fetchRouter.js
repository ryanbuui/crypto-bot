const router = require('express').Router();
const rp = require('request');

router.get("/", async (req, res) => {
    try {
        let crypto = [];

        const requestOptions = {
          method: 'GET',
          uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
          qs: {
            'start': '1',
            'limit': '100',
            'convert': 'USD'
          },
          headers: {
            'X-CMC_PRO_API_KEY': `${process.env.COIN_API_KEY}`
          },
          json: true,
          gzip: true
        };

        rp(requestOptions, function (err,response,html) {
          if(!err && response.statusCode === 200){
            crypto = response.body.data;
            res.json(JSON.stringify(crypto));
          }else{
            console.log('API call error:', err);    
          }
        });
      } catch (err) {
        console.error(err);
        res.status(500).send();
      }
});

module.exports = router;