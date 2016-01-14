'use strict';

const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const app = express();
var port = 3000;

//import models
require ('./app/models/sandal');

//views
app.use (express.static('public/'));
app.use (bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views',__dirname + '/app/views');
app.set('view engine', 'jade');

//routes
var sandal_routes = require('./app/controllers/sandal');
app.use ('/sandal',sandal_routes);

app.get('/',function (req, res) {
	res.redirect('/sandal');
	});

//main loop
connect()
.on('error', console.log)
.on('disconnected',connect)
.once('open',listen);

function listen() {
	app.listen(port);
	console.log('express app started on port' + port);
	}
	
function connect () {
	var option = {server: {socketOption: {keepAlive: 1}}};
	return mongoose.connect ('mongodb://127.0.0.1/tugas', option).connection;
	}