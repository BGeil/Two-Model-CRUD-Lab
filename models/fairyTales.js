const mongoose = require(`mongoose`)


const fairySchema = new mongoose.Schema({
	name: String
})

const Fairytale = mongoose.model(`Fairytale`, fairySchema)

module.exports = Fairytale;
