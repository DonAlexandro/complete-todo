const jwt = require('jsonwebtoken')
const keys = require('../keys')

module.exports = (req, res, next) => {
	if (req.method === 'OPTIONS') {
		return next()
	}

	try {
		const token = req.headers.authorization.split(' ')[1]

		if (!token) {
			return res.status(401).json({error: 'session_expired'})
		}

		const decoded = jwt.verify(token, keys.jwtSecret)

		req.user = decoded

		next()
	} catch (e) {
		res.clearCookie('token')
		res.status(401).json({error: 'session_expired'})
	}
}
