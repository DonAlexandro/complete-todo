import {createContext} from 'react'
import {LoginDataSuccessType} from '@redux/auth/login/types'

export const AuthContext = createContext({
    login: (_: LoginDataSuccessType) => {},
    logout: () => {}
})