//Dependences
var express = require('express');
var app = express();
var port = 8080;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tratamento');

//var router = require('./app/routes.js');

app.listen(port, function() {
	console.log('Initialized');
});

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "./public/index.html"));
	console.log('Working');
});

//route pictures
app.get('/fotos', function(req, res) {
	res.sendFile(path.join(__dirname, "./public/photos.html"));
	console.log('Funfando');
});

app.get('/participantes', function(req, res) {
	res.sendFile(path.join(__dirname, "./public/participantes.html"));
	console.log('Entrou');
});

var photosSchema = mongoose.Schema({
	title: String,
	captured_date: Date,
	upload_date: Date,
	imageURL: String
});

var Photos = mongoose.model('Photo', photosSchema);