
const express = require(`express`)
const router = express.Router()
const Fairytale = require(`../models/fairyTales.js`)


// fairy tale's index route
router.get(`/`, (req, res) => {
	res.render(`fairyTales/index.ejs`)
})




module.exports = router;