const {Router} = require('express')
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const {signupValidator} = require('../middlewares/validators')
const User = require('../models/user')
const keys = require('../keys')
const signupEmail = require('../emails/signup')
const router = Router()

const transporter = nodemailer.createTransport({
	host: keys.smtpHost,
	port: keys.smtpPort,
	auth: {
		user: keys.smtpUser,
		pass: keys.smtpPass
	}
})

router.post('/signup', signupValidator, async (req, res) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return req.status(400).json({message: errors.array()[0].msg})
	}

	try {
		const {email, password, name} = req.body

		const hashedPassword = await bcrypt.hash(password, 10)

		const user = new User({email, password: hashedPassword, name})

		await user.save()

		res.json({message: 'Тепер, щоб увійти, підтверди свій акаунт. Всі деталі у листі, який вже у тебе на пошті'})

		await transporter.sendMail(signupEmail(email, name, user._id))
	} catch (e) {
		res.status(500).json({message: 'Упс... щось пішло не так'})
	}
})

router.post('/login', (req, res) => {

})

module.exports = router
