import React from 'react'
import {Button, Form, Input} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {AppStateType} from '../../redux/rootReducer'
import {actions} from '../../redux/auth/recovery/actions'
import {PasswordRouterPropsTypes} from '../../pages/Password'

export type PasswordFormTypes = {
    password: string,
    confirm: string
}

export const PasswordForm: React.FC = () => {
    const token = useParams<PasswordRouterPropsTypes>().token
    const {userId, loading} = useSelector((state: AppStateType) => state.recovery)
    const history = useHistory()
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const onSubmit = (values: PasswordFormTypes) => {
        if (!userId) {
            return history.push('/login')
        }

        dispatch(actions.passwordRequest({...values, userId, token}))
        history.push('/login')
    }

    return (
        <Form onFinish={onSubmit}>
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
            <Form.Item style={{marginBottom: 0}}>
                <Button
                    htmlType="submit"
                    type="primary"
                    loading={loading}
                >{t('restore')}</Button>
            </Form.Item>
        </Form>
    )
}
