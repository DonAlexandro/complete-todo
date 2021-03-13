import {createContext} from 'react'
import {LoginDataSuccessType} from '@redux/auth/login/types'

export const AuthContext = createContext({
    token: null as string | null,
    login: (_: LoginDataSuccessType) => {},
    logout: () => {}
})