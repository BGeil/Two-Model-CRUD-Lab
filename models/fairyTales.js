const mongoose = require(`mongoose`)


const fairySchema = new mongoose.Schema({
	name: String, characters: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Character'
	}]
})

const Fairytale = mongoose.model(`Fairytale`, fairySchema)

module.exports = Fairytale;
