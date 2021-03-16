import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {message as toast} from 'antd'
import {useTranslation} from 'react-i18next'
import {AuthWrapper} from '../components/AuthWrapper'
import {AppStateType} from '../redux/rootReducer'
import {actions as signupActions} from '../redux/auth/signup/actions'
import {actions as recoveryActions} from '../redux/auth/recovery/actions'
import {LoginForm} from '../components/Forms/LoginForm'

export const Login: React.FC = () => {
    const signup = useSelector((state: AppStateType) => state.signup)
    const recovery = useSelector((state: AppStateType) => state.recovery)
    const dispatch = useDispatch()
    const {t} = useTranslation()

    useEffect(() => {
        if (signup.message) {
            toast.info(t(signup.message), 3)
            dispatch(signupActions.signupSuccess(null))
        }
    }, [signup, dispatch, t])

    useEffect(() => {
        if (recovery.message) {
            toast.info(t(recovery.message), 3)
            dispatch(recoveryActions.recoverySuccess(null))
        }
    }, [recovery, dispatch, t])

    useEffect(() => {
        if (recovery.error) {
            toast.error(t(recovery.error), 3)
            dispatch(recoveryActions.responseError(null))
        }
    }, [recovery, dispatch, t])

    return (
        <AuthWrapper title={t('login')}>
            <LoginForm />
        </AuthWrapper>
    )
}
