const Mailgen = require('mailgen')
const keys = require('../keys')

module.exports = (mail) => {
	const emailGenerator = new Mailgen({
		theme: 'default',
		product: {
			name: 'Complete Todo ✔',
			link: keys.baseUrl,
			copyright: `© ${new Date().getFullYear()} <a href="${keys.baseUrl}">Complete Todo</a>. Всі права захищені`
		}
	})

	return emailGenerator.generate(mail)
}
