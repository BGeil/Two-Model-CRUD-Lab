
const express = require(`express`)
const router = express.Router()
const Fairytale = require(`../models/fairyTales.js`)


// fairy tale's index route
router.get(`/`, (req, res) => {
	Fairytale.find({}, (err, foundFairyTales) => {
		if (err) {
			res.send(err)
		}
		else {
			res.render(`fairyTales/index.ejs`, {
				fairyTales: foundFairyTales
			})
		}
	})
	
})

// new route
router.get(`/new`, (req, res) => {
	res.render(`fairyTales/new.ejs`)
})

// create route
router.post(`/`, (req, res) => {
	console.log(req.body);
	Fairytale.create(req.body, (err, createdFairyTale) => {
		if (err) {
			res.send(err)
		}
		else {
			res.redirect(`/fairyTales`)
		}
	})
})

// show route
router.get('/:id', (req, res) => {
	Fairytale.findById(req.params.id).populate({path: 'characters'}).exec( (err, foundFT) => {
	    if (err) {
	    	console.log(err)
	    } else {
	    	console.log(foundFT)
	    	res.render('fairyTales/show.ejs', {ft: foundFT})
	    }
	})

/*	Fairytale.findById(req.params.id, (err, foundFairyTale) => {
	    if (err) {
	    	console.log(err)
	    } else {
	    	res.render('./fairyTales/show.ejs', {ft: foundFairyTale})
	    }
	})*/
})
module.exports = router;