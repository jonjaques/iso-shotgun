var router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    version: 1
  });
})

router.use('/test', require('./test'));

module.exports = router;