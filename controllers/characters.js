const express = require('express');
const router = express.Router();
const Character = require('../models/characters.js');
const Fairytales = require('../models/fairyTales.js')

// character's index route
router.get(`/`, (req, res) => {
	Character.find({}, (err, foundCharacters) => {
		if (err) {
			res.send(err)
		}
		else {
			res.render(`characters/index.ejs`, {
				characters: foundCharacters
			})
		}
	})
	
})

// new route
router.get(`/new`, (req, res) => {
	res.render(`characters/new.ejs`)
})

// create route
router.post(`/`, (req, res) => {
	console.log(req.body);
	Character.create(req.body, (err, character) => {
		if (err) {
			res.send(err)
		}
		else {
			res.redirect(`/characters`)
		}
	})
})

// show route
router.get('/:id', (req, res) => {
	Fairytale.findOne({'characters': req.params.id}).
	populate({path: 'characters', match: {_id: req.params.id}})
	.exec( (err, foundFT) => {
	if (err) {
		console.log(err)
	} else {
		res.render('characters/show.ejs', {
			ft: foundFT,
			character: foundFT.characters[0]})
	}
/*	Character.findById(req.params.id, (err, character) => {
	    if (err) {
	    	console.log(err)
	    } else {
	    	res.render('./characters/show.ejs', {fc: character})
	    }
	})
*/})
})


module.exports = router;