var router = require('express').Router();
var path = require('path');
var React = require('react');
var api = require('./api');

var webpack = require('webpack');
var webpackConfig = require('../../webpack.config.js')
require('generic-typescript-require').install({ compiler: 'jsx-typescript'})

router.use('/api/v1', api);

router.use(function(req, res, next){
  for (var _path in require.cache) {
    if (path.extname(_path) == '.ts') {
      console.log('clearing ' + _path + ' ...')
      delete require.cache[_path];
    }
  }
  next();
});


router.get('/*', function(req, res, next) {
  req.appData = {
    title: 'Foobar',
    preloads: []
  }
  next();
});

router.get('/*', function(req, res, next) {
  req.appData.preloads.push({
    stuff: 'things'
  })
  next();
});

router.get('/*', function(req, res) {
  var appData = req.appData;
  res.render('index', {
    title: 'Arrowhead Powersports',
    appData: safeStringify(appData),
    appHtml: renderAppHtml(appData)
  })
});

function renderAppHtml(data) {
  var App = require('../../client/app/components/app/index');
  var app = React.createElement(App, data);
	return React.renderToString(app);
}

function safeStringify(obj) {
  return JSON.stringify(obj)
  	.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

module.exports = router;