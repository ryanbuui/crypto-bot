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
            'limit': '5',
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
          }else{
            console.log('API call error:', err.message);    
          }
    
        });
        
        res.json(JSON.stringify(crypto));
      } catch (err) {
        console.error(err);
        res.status(500).send();
      }
});