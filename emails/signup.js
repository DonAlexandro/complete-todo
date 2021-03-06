const keys = require('../keys')
const generator = require('./generator')

module.exports = (email, name, id) => {
	const mail = {
		body: {
			title: `Привіт, ${name}`,
			intro: 'Раді, що ти вирішив обрати наш сервіс!',
			action: {
				instructions: 'Нажми на кнопку нижче і все готово!',
				button: {
					color: '#1890FF',
					text: 'Підтвердити',
					link: `${keys.baseUrl}/confirm/${id}`
				}
			},
			signature: false
		}
	}

	return {
		from: keys.websiteEmail,
		to: email,
		subject: 'Підтверди акаунт на Complete Todo',
		html: generator(mail)
	}
}
