import React, {useContext, useEffect} from 'react'
import {Button, Col, Form, Input, message, Row} from 'antd'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {actions} from '../../redux/auth/login/actions'
import {AppStateType} from '@redux/rootReducer'
import {AuthContext} from '../../context/AuthContext'

export type LoginFormTypes = {
    email: string,
    password: string
}

export const LoginForm: React.FC = () => {
    const {loading, error, token, userId} = useSelector((state: AppStateType) => state.login)
    const dispatch = useDispatch()
    const {login} = useContext(AuthContext)
    const {t} = useTranslation()

    useEffect(() => {
        if (error) {
            message.error(t(error))
            dispatch(actions.loginError(null))
        }
    }, [error, t, dispatch])

    useEffect(() => {
        if (token && userId) {
            login({token, userId})
            dispatch(actions.loginSuccess({token: null, userId: null}))
        }
    }, [login, token, userId, dispatch])

    const onSubmit = (values: LoginFormTypes) => {
        dispatch(actions.loginRequest(values))
    }

    return (
        <Form onFinish={onSubmit}>
            <Form.Item name="email" rules={[
                {required: true, message: t('email_required')},
                {type: 'email', message: t('email_invalid')}
            ]} validateTrigger={'onBlur'}>
                <Input placeholder={t('email_placeholder')} type="email"/>
            </Form.Item>
            <Form.Item name="password" rules={[
                {required: true, message: t('password_required')},
                {min: 8, message: t('password_length')}
            ]} validateTrigger={'onBlur'}>
                <Input.Password placeholder={t('password_placeholder')}/>
            </Form.Item>
            <Row>
                <Col span={12}>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            type="primary"
                            loading={loading}
                        >{t('login')}</Button>
                    </Form.Item>
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <Link to="/recovery">{t('password_forgotten')}</Link>
                </Col>
            </Row>
            <Link to="/signup">{t('still_unregistered')}</Link>
        </Form>
    )
}
