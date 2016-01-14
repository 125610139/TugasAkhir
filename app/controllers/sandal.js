'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');
var Sandal = mongoose.model('sandal');

router.get('/', function (req, res) {
	Sandal.find({}).exec(function(err, sandal) {
		res.render('sandal_index', { data : sandal });
	});
});
//Tambah data
	router.get('/tambah', function (req, res) {
	res.render('sandal_tambah', { title : 'Tambah Sandal', data: '' });
	});
 
 router.post('/tambah', function (req, res) {
	var merk = req.body.merk;
	var ukuran = req.body.ukuran;
	var warna = req.body.warna;
	var jenis = req.body.jenis;
	
	var SandalBaru = new Sandal ({ merk : merk, ukuran: ukuran, warna : warna, jenis: jenis});
	SandalBaru.save(function(err){
	if (err) throw err;
	res.redirect('/sandal');
	});
	});
	
//ubah data
router.get('/ubah/:sandal_id([0-9a-z]+)', function (req, res) {
	Sandal.findOne({_id: req.params.sandal_id}).exec(function(err, sandal) {
	if (err) throw err;
	res.render('sandal_tambah', {title: 'Ubah Sandal', data: sandal});
	});
	});

router.post('/ubah/:sandal_id([0-9a-z]+)', function (req,res) {
	var data_berubah = req.body;
	Sandal.findOneAndUpdate({_id: req.params.sandal_id}, data_berubah).exec(function(err) {
		if (err)throw err;
	res.redirect('/sandal');
	});
});

//hapus data
router.get('/hapus/:sandal_id([0-9a-z]+)', function(req, res) {
	Sandal.findOneAndRemove({_id: req.params.sandal_id}).exec(function(err){
	if (err) throw err;
	res.redirect('/sandal');
	});
	});
module.exports = router;
