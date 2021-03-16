import React from 'react'
import {useTranslation} from 'react-i18next'
import {AuthWrapper} from '../components/AuthWrapper'
import {SignupForm} from '../components/Forms/SigupForm'

export const Signup: React.FC = () => {
    const {t} = useTranslation()

    return (
        <AuthWrapper title={t('signup')} subtitle={t('signup_subtitle')}>
            <SignupForm />
        </AuthWrapper>
    )
}
