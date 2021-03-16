const {body} = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const Todo = require('../models/todo')

exports.signupValidator = [
	body('email')
		.notEmpty().withMessage('email_required')
		.isEmail().withMessage('email_invalid')
		.normalizeEmail()
		.trim()
		.custom(async value => {
			const candidate = await User.findOne({email: value})

			if (candidate) {
				return Promise.reject('email_busy')
			}
		}),
	body('password')
		.isLength({min: 8}).withMessage('password_length')
		.isAlphanumeric()
		.trim(),
	body('confirm')
		.custom((value, {req}) => {
			if (value !== req.body.password) {
				throw new Error('confirm_invalid')
			}

			return true
		}),
	body('name')
		.notEmpty().withMessage('name_required')
		.trim()
]

exports.confirmValidator = [
	body('id')
		.custom(async value => {
			const user = await User.findById(value)

			if (!user) {
				return Promise.reject('account_not_found')
			}
		})
		.custom(async value => {
			const user = await User.findById(value)

			if (user.emailVerified) {
				return Promise.reject('account_verified')
			}
		})
]

exports.loginValidator = [
	body('email')
		.notEmpty().withMessage('email_required')
		.isEmail().withMessage('email_invalid')
		.normalizeEmail()
		.trim()
		.custom(async value => {
			const user = await User.findOne({email: value})

			if (!user) {
				return Promise.reject('email_not_found')
			}
		})
		.custom(async value => {
			const user = await User.findOne({email: value})

			if (!user.emailVerified) {
				return Promise.reject('account_not_verified')
			}
		}),
	body('password')
		.isLength({min: 8}).withMessage('password_length')
		.isAlphanumeric()
		.trim()
		.custom(async (value, {req}) => {
			const user = await User.findOne({email: req.body.email})

			const isSame = await bcrypt.compare(value, user.password)

			if (!isSame) {
				return Promise.reject('password_invalid')
			}
		})
]

exports.recoveryValidator = [
	body('email')
		.notEmpty().withMessage('email_required')
		.isEmail().withMessage('email_invalid')
		.normalizeEmail()
		.trim()
		.custom(async value => {
			const user = await User.findOne({email: value})

			if (!user) {
				return Promise.reject('email_not_found')
			}
		})
]

exports.passwordValidator = [
	body('password')
		.isLength({min: 8}).withMessage('password_length')
		.isAlphanumeric()
		.trim(),
	body('confirm')
		.custom((value, {req}) => {
			if (value !== req.body.password) {
				throw new Error('confirm_invalid')
			}

			return true
		}),
]

exports.todoValidator = [
	body('title')
		.notEmpty()
		.trim()
]

exports.deleteTodoValidator = [
	body('id')
		.notEmpty()
		.custom(async value => {
			const todo = await Todo.findById(value)

			if (!todo) {
				return false
			}

			return true
		})
]
