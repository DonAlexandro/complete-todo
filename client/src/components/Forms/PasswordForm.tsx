import React from 'react'
import {Button, Form, Input} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'
import {AppStateType} from '@redux/rootReducer'
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
                {required: true, message: 'Введи свій новий пароль'},
                {min: 8, message: 'Пароль повинен містити щонайменше 8 символів'}
            ]} validateTrigger={'onBlur'}>
                <Input.Password placeholder="Придумай пароль не менше 8 символів"/>
            </Form.Item>
            <Form.Item name="confirm" rules={[
                {required: true, message: 'Повтори свій новий пароль пароль'},
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }

                        return Promise.reject(new Error('Паролі не співпадають'))
                    },
                }),
            ]} validateTrigger={'onBlur'}>
                <Input.Password placeholder="Повтори свій новий пароль"/>
            </Form.Item>
            <Form.Item style={{marginBottom: 0}}>
                <Button
                    htmlType="submit"
                    type="primary"
                    loading={loading}
                >Відновити</Button>
            </Form.Item>
        </Form>
    )
}
