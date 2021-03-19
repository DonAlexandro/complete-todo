import {useCallback, useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'
import {LoginDataSuccessType} from '../redux/auth/login/types'

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null)
    const [cookies, setCookie, removeCookie] = useCookies(['token'])

    const login = useCallback((data: LoginDataSuccessType) => {
        setCookie('token', data.token, {
            path: '/'
        })
    }, [setCookie])

    const logout = useCallback(() => {
        removeCookie('token')
    }, [removeCookie])

    useEffect(() => {
        if (cookies.token) {
            setToken(cookies.token)
        } else {
            setToken(null)
        }
    }, [cookies.token])

    return {login, logout, token}
}
