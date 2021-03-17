import {useCallback} from 'react'
import {useCookies} from 'react-cookie'
import {LoginDataSuccessType} from '../redux/auth/login/types'

export const useAuth = () => {
    const [,setCookie, removeCookie] = useCookies(['token'])

    const login = useCallback((data: LoginDataSuccessType) => {
        setCookie('token', data.token, {
            path: '/'
        })
    }, [setCookie])

    const logout = useCallback(() => {
        removeCookie('token')
    }, [removeCookie])

    return {login, logout}
}
