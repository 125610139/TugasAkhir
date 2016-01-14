'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var sandalSchema = new Schema({
	merk : String,
	ukuran : String,
	warna : String,
	jenis : String,
	});
	
module.exports = mongoose.model('sandal', sandalSchema);