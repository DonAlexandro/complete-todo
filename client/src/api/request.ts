import {config} from './config'

type MethodType = 'GET' | 'POST'
type BodyType = Record<string, any> | string | null

// type UserHeadersTypes = {
// 	authorization?: boolean | string,
// 	'Content-Type'?: string
// }
//
// type HeadersTypes = UserHeadersTypes & HeadersInit

export async function request<T> (
	path: string,
	method = 'GET' as MethodType,
	body = null as BodyType,
	headers = {} as any): Promise<T> {
	try {
		if (headers && headers.authorization) {
			headers.authorization = `Bearer ${config.getToken()}`
		}

		if (body) {
			body = JSON.stringify(body)
			headers['Content-Type'] = 'application/json'
		}

		const response = await fetch(path, {method, body, headers})
		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.error || 'server_error')
		}

		return data
	} catch (e) {
		throw e
	}
}
