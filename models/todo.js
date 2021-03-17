const {model, Schema} = require('mongoose')

const todoSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	done: {
		type: Boolean,
		default: false
	},
	date: {
		type: Date,
		default: Date.now
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})

module.exports = model('Todo', todoSchema)
