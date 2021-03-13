import React, {useContext, useEffect} from 'react'
import {Button, Col, Form, Input, message, Row} from 'antd'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
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

    useEffect(() => {
        if (error) {
            message.error(error)
            actions.loginError(null)
        }
    }, [error])

    useEffect(() => {
        if (token && userId) {
            login({token, userId})
            actions.loginSuccess({token: null, userId: null})
        }
    }, [login, token, userId])

    const onSubmit = (values: LoginFormTypes) => {
        dispatch(actions.loginRequest(values))
    }

    return (
        <Form onFinish={onSubmit}>
            <Form.Item name="email" rules={[
                {required: true, message: 'Ти забув ввести Email'},
                {type: 'email', message: 'Email не коректний'}
            ]} validateTrigger={'onBlur'}>
                <Input placeholder="Твій Email" type="email"/>
            </Form.Item>
            <Form.Item name="password" rules={[
                {required: true, message: 'Ти забув ввести пароль'},
            ]} validateTrigger={'onBlur'}>
                <Input.Password placeholder="Твій пароль"/>
            </Form.Item>
            <Row>
                <Col span={12}>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            type="primary"
                            loading={loading}
                        >Увійти</Button>
                    </Form.Item>
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <Link to="/recovery">Не пам'ятаєш пароль?</Link>
                </Col>
            </Row>
            <Link to="/signup">Ще не зареєстрований?</Link>
        </Form>
    )
}
