const express = require(`express`)
const app = express()


require(`./db/db.js`)

// home page
app.get(`/`, (req, res) => {
	console.log(`hitting the index`);
	res.render(`index.ejs`)
})

// controllers
	const fairyTaleController = require(`./controllers/fairyTales.js`)
	app.use(`/fairyTales`,fairyTaleController)



app.listen(3000, () => {
	console.log(`connected at port 3000`);
})
