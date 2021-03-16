const Mailgen = require('mailgen')
const keys = require('../../keys')
const translations = require('./translations.json')

module.exports = (mail, language) => {
	const emailGenerator = new Mailgen({
		theme: 'default',
		product: {
			name: 'Complete Todo ✔',
			link: keys.baseUrl,
			copyright: `© ${new Date().getFullYear()} <a href="${keys.baseUrl}">Complete Todo</a>. ${translations[language].copyright}`
		}
	})

	return emailGenerator.generate(mail)
}
