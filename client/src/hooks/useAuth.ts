import {useCallback, useEffect, useState} from 'react'
import {LoginDataSuccessType} from '../redux/auth/login/types'

export const useAuth = () => {
    const [ready, setReady] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)

    const login = useCallback((data: LoginDataSuccessType) => {
        setToken(data.token)

        localStorage.setItem('userData', JSON.stringify(data))
    }, [])

    const logout = useCallback(() => {
        setToken(null)

        localStorage.removeItem('userData')
    }, [])

    useEffect(() => {
        const data: LoginDataSuccessType = JSON.parse(localStorage.getItem('userData') || '{}')

        if (data.token) {
            login(data)
        }

        setReady(true)
    }, [login])

    return {ready, token, login, logout}
}
