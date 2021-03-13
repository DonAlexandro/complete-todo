const keys = require('../keys')
const generator = require('./generator')

module.exports = (email, name, token) => {
	const mail = {
		body: {
			title: `Привіт, ${name}`,
			intro: 'З твого акаунта надійшов запит на відновлення паролю',
			action: {
				instructions: 'Жми на кнопку і гайда! :)',
				button: {
					color: '#1890FF',
					text: 'Відновити пароль',
					link: `${keys.baseUrl}/password/${token}`
				}
			},
			outro: 'Якщо це був не ти, проігноруй дане повідомлення',
			signature: false
		}
	}

	return {
		from: keys.websiteEmail,
		to: email,
		subject: 'Відновлення паролю на Complete Todo',
		html: generator(mail)
	}
}
