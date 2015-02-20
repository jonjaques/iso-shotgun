var router = require('express').Router();
var path = require('path');
var api = require('./api');

router.use('/api/v1', api);

router.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../../client/index.html'));
});

module.exports = router;