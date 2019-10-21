
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


module.exports = router;