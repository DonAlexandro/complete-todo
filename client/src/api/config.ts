export const config = {
	getToken: () => {
		const token = /token=.+/.exec(document.cookie)!

		return token[0].replace('token=', '')
	}
}
