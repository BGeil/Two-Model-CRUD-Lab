const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)


require(`./db/db.js`)


// middleware
app.use(bodyParser.urlencoded({extended:false}))



// home page
app.get(`/`, (req, res) => {
	console.log(`hitting the index`);
	res.render(`index.ejs`)
})

// controllers
	const fairyTaleController = require(`./controllers/fairyTales.js`)
	app.use(`/fairyTales`,fairyTaleController)
	const characterController = require('./controllers/characters.js')
	app.use('/characters', characterController)


app.listen(3000, () => {
	console.log(`connected at port 3000`);
})
