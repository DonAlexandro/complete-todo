import {config} from './config'

type MethodType = 'GET' | 'POST'

// todo: change headers type any to something correct
export async function request<T> (
	path: string,
	method = 'GET' as MethodType,
	body?: Record<string, any> | string,
	headers = {} as any): Promise<T> {
	try {
		if (headers && headers.authorization) {
			headers.authorization = config.token
		}

		if (body) {
			body = JSON.stringify(body)
			headers['Content-Type'] = 'application/json'
		}

		const response = await fetch(path, {method, body, headers})
		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.error || 'Ой... на жаль, щось пішло не так')
		}

		return data
	} catch (e) {
		throw e
	}
}
