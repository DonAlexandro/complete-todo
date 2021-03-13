import React from 'react'
import {AuthWrapper} from '../components/AuthWrapper'
import {RecoveryForm} from '../components/Forms/RecoveryForm'

export const Recovery: React.FC = () => {
    return (
        <AuthWrapper title="Відновлення паролю">
            <RecoveryForm />
        </AuthWrapper>
    )
}
