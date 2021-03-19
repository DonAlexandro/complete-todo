import {Button, Spin} from 'antd'
import React, {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {AuthWrapper} from '../components/AuthWrapper'
import {AppStateType} from '../redux/rootReducer'
import {actions} from '../redux/auth/confirm/actions'

type ConfirmRouterPropsType = {
    id: string
}

export const Confirm: React.FC = () => {
    const id = useParams<ConfirmRouterPropsType>().id

    const {message, error, loading} = useSelector((state: AppStateType) => state.confirm)
    const dispatch = useDispatch()
    const {t} = useTranslation()

    useEffect(() => {
        dispatch(actions.confirmRequest(id))
    }, [dispatch, id])

    return (
        loading ?
            <Spin size="large" tip={t('verifying_account')}/>
            :
            <AuthWrapper title={t('verification')} subtitle={t(message! || error!)}>
                <Button type="primary" size="large">
                    <Link to="/login">{t('login')}</Link>
                </Button>
            </AuthWrapper>
    )
}
