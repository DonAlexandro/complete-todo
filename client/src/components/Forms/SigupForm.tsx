import React, {useEffect} from 'react'
import {Button, Col, Form, Input, Row, message as toast} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {actions} from '../../redux/auth/signup/actions'
import {AppStateType} from '../../redux/rootReducer'

export type SignupFormTypes = {
    name: string,
    email: string,
    password: string,
    confirm: string
}

export const SignupForm: React.FC = () => {
    const {message, error, loading} = useSelector((state: AppStateType) => state.signup)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(actions.signupError(null))
        }
    }, [error, dispatch])

    useEffect(() => {
        if (message) {
            history.push('/login')
        }
    }, [message, history])

    const onSubmit = async (values: SignupFormTypes) => dispatch(actions.signupRequest(values))

    return (
        <Form onFinish={onSubmit}>
            <Row gutter={{md: 12}}>
                <Col span={12}>
                    <Form.Item name="name" rules={[
                        {required: true, message: 'То як тебе, все ж таки, звати?'}
                    ]} validateTrigger={'onBlur'}>
                        <Input placeholder="Як тебе звати?" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="email" rules={[
                        {required: true, message: 'Ти забув увести Email'},
                        {type: 'email', message: 'Email не коректний'}
                    ]} validateTrigger={'onBlur'}>
                        <Input placeholder="Твій Email" type="email"/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item name="password" rules={[
                {required: true, message: 'Ти ж не хочеш, щоб твій акаунт вкрали?'},
                {min: 8, message: 'Пароль повинен містити щонайменше 8 символів'}
            ]} validateTrigger={'onBlur'}>
                <Input.Password placeholder="Придумай пароль не менше 8 символів"/>
            </Form.Item>
            <Form.Item name="confirm" rules={[
                {required: true, message: 'Повтори свій пароль'},
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }

                        return Promise.reject(new Error('Паролі не співпадають'))
                    },
                }),
            ]} validateTrigger={'onBlur'}>
                <Input.Password placeholder="Повтори свій пароль"/>
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    type="primary"
                    loading={loading}
                >Зареєструватися</Button>
            </Form.Item>
            <Link to="/login">Вже є акаунт?</Link>
        </Form>
    )
}
