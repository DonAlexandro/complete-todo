import React from 'react'
import {AuthWrapper} from '../components/AuthWrapper'
import {SignupForm} from '../components/Forms/SigupForm'

export const Signup: React.FC = () => {
    return (
        <AuthWrapper title="Реєстрація" subtitle="Створіть акаунт у нашому сервісі і більше нічого не забувайте!">
            <SignupForm />
        </AuthWrapper>
    )
}
