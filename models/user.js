const {Schema, model} = require('mongoose')

const userSchema = new Schema({
	email: {
		required: true,
		unique: true,
		type: String
	},
	password: {
		required: true,
		type: String
	},
	name: {
		type: String,
		required: true
	},
	emailVerified: {
		type: Boolean,
		default: false
	},
	date: {
		type: Date,
		default: Date.now
	},
	resetToken: String,
	resetTokenExp: Date
})

module.exports = model('User', userSchema)
