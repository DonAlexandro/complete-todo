const {Router} = require('express')
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const {
	signupValidator,
	loginValidator,
	confirmValidator,
	recoveryValidator,
	passwordValidator
} = require('../middlewares/validators')
const User = require('../models/user')
const keys = require('../keys')
const signupEmail = require('../emails/signup')
const recoveryEmail = require('../emails/recovery')
const router = Router()

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: keys.smtpUser,
		pass: keys.smtpPass
	}
})

router.post('/signup', signupValidator, async (req, res) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(400).json({error: errors.array()[0].msg})
	}

	try {
		const {email, password, name} = req.body

		const hashedPassword = await bcrypt.hash(password, 10)

		const user = new User({email, password: hashedPassword, name})

		await user.save()

		res.json({message: 'signup_success'})

		await transporter.sendMail(signupEmail(email, name, user._id, req.cookies.language || 'en'))
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.post('/confirm', confirmValidator, async (req, res) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(400).json({error: errors.array()[0].msg})
	}

	try {
		const user = await User.findById(req.body.id)

		Object.assign(user, {emailVerified: true})

		await user.save()

		res.json({message: 'verification_success'})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.post('/login', loginValidator, async (req, res) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(400).json({error: errors.array()[0].msg})
	}

	try {
		const {email} = req.body

		const user = await User.findOne({email})
		const userId = user._id

		const token = jwt.sign({userId}, keys.jwtSecret, {expiresIn: '1h'})

		res.json({token, userId})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.post('/recovery', recoveryValidator, async (req, res) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(400).json({error: errors.array()[0].msg})
	}

	crypto.randomBytes(32, async (err, buffer) => {
		if (err) {
			return res.status(500).json({error: 'server_error'})
		}

		const token = buffer.toString('hex')

		const {email} = req.body

		const user = await User.findOne({email})

		user.resetToken = token
		user.resetTokenExp = Date.now() + 60 * 60 * 1000

		await user.save()

		res.json({message: 'recover_success'})

		await transporter.sendMail(recoveryEmail(email, user.name, token, req.cookies.language || 'en'))
	})
})

router.get('/password/:token', async (req, res) => {
	if (!req.params.token) {
		return res.status(400).json({error: 'server_error'})
	}

	try {
		const user = await User.findOne({
			resetToken: req.params.token,
			resetTokenExp: {$gt: Date.now()}
		})

		if (!user) {
			return res.status(400).json({error: 'recover_error'})
		}

		res.json({userId: user._id.toString()})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.post('/password', passwordValidator, async (req, res) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(400).json({error: errors.array()[0].msg})
	}

	try {
		const {userId, token, password} = req.body

		const user = await User.findOne({
			_id: userId,
			resetToken: token,
			resetTokenExp: {$gt: Date.now()}
		})

		if (user) {
			user.password = await bcrypt.hash(password, 10)
			user.resetToken = undefined
			user.resetTokenExp = undefined

			await user.save()

			res.json({message: 'password_success'})
		} else {
			return res.status(400).json({error: 'recover_error'})
		}
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

module.exports = router
