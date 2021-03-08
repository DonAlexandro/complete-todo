const {body} = require('express-validator')
const User = require('../models/user')

exports.signupValidator = [
	body('email')
		.notEmpty().withMessage('Не забувай про Email')
		.isEmail().withMessage('Email не коректний')
		.normalizeEmail()
		.trim()
		.custom(async value => {
			const candidate = await User.findOne({email: value})

			if (candidate) {
				return Promise.reject('Такий Email вже зайнятий')
			}
		}),
	body('password')
		.isLength({min: 8}).withMessage('Введи не менше 8 символів')
		.isAlphanumeric()
		.trim(),
	body('confirm')
		.custom((value, {req}) => {
			if (value !== req.body.password) {
				throw new Error('Паролі не співпадають')
			}

			return true
		}),
	body('name')
		.notEmpty().withMessage('То як тебе звати?')
		.trim()
]
