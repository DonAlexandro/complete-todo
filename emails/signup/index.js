const keys = require('../../keys')
const generator = require('../generator')
const translations = require('./translations.json')

module.exports = (email, name, id, language) => {
	const mail = {
		body: {
			title: `${translations[language].body.title}, ${name}`,
			intro: translations[language].body.intro,
			action: {
				instructions: translations[language].body.instructions,
				button: {
					color: '#1890FF',
					text: translations[language].body.button,
					link: `${keys.baseUrl}/confirm/${id}`
				}
			},
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
