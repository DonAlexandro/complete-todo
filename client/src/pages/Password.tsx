import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {AuthWrapper} from '../components/AuthWrapper'
import {PasswordForm} from '../components/Forms/PasswordForm'
import {actions} from '../redux/auth/recovery/actions'

export type PasswordRouterPropsTypes = {
    token: string
}

export const Password: React.FC = () => {
    const token = useParams<PasswordRouterPropsTypes>().token

    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            dispatch(actions.tokenRequest(token))
        }
    }, [token, dispatch])

    return (
        <AuthWrapper title="Новий пароль" subtitle="Введи новий пароль і запиши його, щоб не забувати надалі">
            <PasswordForm />
        </AuthWrapper>
    )
}
