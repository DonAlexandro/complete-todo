const {body} = require('express-validator')
const bcrypt = require('bcrypt')
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
		.isLength({min: 8}).withMessage('Пароль повинен містити не менше 8 символів')
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

exports.confirmValidator = [
	body('id')
		.custom(async value => {
			const user = await User.findById(value)

			if (!user) {
				return Promise.reject('Ми не змогли знайти твій акаунт, щоб підтвердити його')
			}
		})
		.custom(async value => {
			const user = await User.findById(value)

			if (user.emailVerified) {
				return Promise.reject('Твій акаунт уже верифіковано!')
			}
		})
]

exports.loginValidator = [
	body('email')
		.notEmpty().withMessage('Не забувай про Email')
		.isEmail().withMessage('Email не коректний')
		.normalizeEmail()
		.trim()
		.custom(async value => {
			const user = await User.findOne({email: value})

			if (!user) {
				return Promise.reject('Користувач з таким Email-ом не зареєстрований')
			}
		})
		.custom(async value => {
			const user = await User.findOne({email: value})

			if (!user.emailVerified) {
				return Promise.reject('Ви не можете увійти, бо не верифікували свій акаунт')
			}
		}),
	body('password')
		.isLength({min: 8}).withMessage('Пароль повинен містити не менше 8 символів')
		.isAlphanumeric()
		.trim()
		.custom(async (value, {req}) => {
			const user = await User.findOne({email: req.body.email})

			const isSame = await bcrypt.compare(value, user.password)

			if (!isSame) {
				return Promise.reject('Невірний пароль')
			}
		})
]

exports.recoveryValidator = [
	body('email')
		.notEmpty().withMessage('Не забувай про Email')
		.isEmail().withMessage('Email не коректний')
		.normalizeEmail()
		.trim()
		.custom(async value => {
			const user = await User.findOne({email: value})

			if (!user) {
				return Promise.reject('Користувача з таким Email-ом не знайдено')
			}
		})
]

exports.passwordValidator = [
	body('password')
		.isLength({min: 8}).withMessage('Пароль повинен містити не менше 8 символів')
		.isAlphanumeric()
		.trim(),
	body('confirm')
		.custom((value, {req}) => {
			if (value !== req.body.password) {
				throw new Error('Паролі не співпадають')
			}

			return true
		}),
]
