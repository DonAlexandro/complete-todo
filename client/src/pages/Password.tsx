import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {AuthWrapper} from '../components/AuthWrapper'
import {PasswordForm} from '../components/Forms/PasswordForm'
import {actions} from '../redux/auth/recovery/actions'

export type PasswordRouterPropsTypes = {
    token: string
}

export const Password: React.FC = () => {
    const token = useParams<PasswordRouterPropsTypes>().token

    const dispatch = useDispatch()
    const {t} = useTranslation()

    useEffect(() => {
        if (token) {
            dispatch(actions.tokenRequest(token))
        }
    }, [token, dispatch])

    return (
        <AuthWrapper title={t('new_password')} subtitle={t('new_password_subtitle')}>
            <PasswordForm />
        </AuthWrapper>
    )
}
