/*var express = require('express');
var path = require('path');
var router = express.Router();

//route home
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"));
	console.log('Working');
});

//route pictures
router.get('/photo', function(req, res) {
	res.sendFile(path.join(__dirname, "../public/photos.html"));
	res.send('Entrou!!');
});

router.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname, "./public/about.html"));
});

router.get('/participantes', function(req, res) {
	res.sendFile(path.join(__dirname, "./public/participantes.html"));
});

router.get('/contact', function(req, res) {
	res.sendFile(path.join(__dirname, "./public/contact.html"));
});
*/