import React, {ReactNode} from 'react'
import {Card, Typography} from 'antd'

const {Title, Text} = Typography

type AuthWrapperTypes = {
    children: ReactNode,
    title: string,
    subtitle?: string | undefined
}

export const AuthWrapper: React.FC<AuthWrapperTypes> = ({children, title, subtitle}) => {
    return (
        <div className="auth-wrapper">
            <Card className="auth-card">
                <div className="auth-card-header">
                    <Title>{title}</Title>
                    {subtitle &&
                        <div style={{marginBottom: '2rem'}}>
                            <Text>{subtitle}</Text>
                        </div>
                    }
                </div>
                {children}
            </Card>
        </div>
    )
}
