import express from 'express'
var router = express.Router();
var api = require('./api');

router
  .get('/', (req, res) => {
    res.send('welcome to the routes !!!aa');
  })
  .use('/api', api);

module.exports = router;