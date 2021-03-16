const keys = require('../../keys')
const generator = require('../generator')
const translations = require('./translations.json')

module.exports = (email, name, token, language) => {
	const mail = {
		body: {
			title: `${translations[language].body.title}, ${name}`,
			intro: translations[language].body.intro,
			action: {
				instructions: translations[language].body.instructions,
				button: {
					color: '#1890FF',
					text: translations[language].body.button,
					link: `${keys.baseUrl}/password/${token}`
				}
			},
			outro: translations[language].body.outro,
			signature: false
		}
	}

	return {
		from: keys.websiteEmail,
		to: email,
		subject: translations[language].subject,
		html: generator(mail, language)
	}
}
