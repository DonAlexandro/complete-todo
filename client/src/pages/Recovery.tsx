import React from 'react'
import {useTranslation} from 'react-i18next'
import {AuthWrapper} from '../components/AuthWrapper'
import {RecoveryForm} from '../components/Forms/RecoveryForm'

export const Recovery: React.FC = () => {
    const {t} = useTranslation()

    return (
        <AuthWrapper title={t('password_restore')}>
            <RecoveryForm />
        </AuthWrapper>
    )
}
