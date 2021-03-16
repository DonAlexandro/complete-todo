import React, {useEffect} from 'react'
import {Button, Col, Form, Input, Row, message as toast} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
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
    const {t} = useTranslation()

    useEffect(() => {
        if (error) {
            toast.error(t(error))
            dispatch(actions.signupError(null))
        }
    }, [error, dispatch, t])

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
                        {required: true, message: t('name_required')}
                    ]} validateTrigger={'onBlur'}>
                        <Input placeholder={t('name_placeholder')} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="email" rules={[
                        {required: true, message: t('email_required')},
                        {type: 'email', message: t('email_invalid')}
                    ]} validateTrigger={'onBlur'}>
                        <Input placeholder={t('email_placeholder')} type="email"/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item name="password" rules={[
                {required: true, message: t('password_required')},
                {min: 8, message: t('password_length')}
            ]} validateTrigger={'onBlur'}>
                <Input.Password placeholder={t('password_placeholder')}/>
            </Form.Item>
            <Form.Item name="confirm" rules={[
                {required: true, message: t('confirm_required')},
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }

                        return Promise.reject(new Error(t('confirm_invalid')))
                    },
                }),
            ]} validateTrigger={'onBlur'}>
                <Input.Password placeholder={t('confirm_placeholder')}/>
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    type="primary"
                    loading={loading}
                >{t('signup')}</Button>
            </Form.Item>
            <Link to="/login">{t('already_registered')}</Link>
        </Form>
    )
}
