import React, {useEffect} from 'react'
import {Button, Form, Input, message as toast} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {actions} from '../../redux/auth/recovery/actions'
import {AppStateType} from '../../redux/rootReducer'

export type RecoveryFormTypes = {
    email: string
}

export const RecoveryForm: React.FC = () => {
    const {error, loading, message} = useSelector((state: AppStateType) => state.recovery)
    const dispatch = useDispatch()
    const history = useHistory()
    const {t} = useTranslation()

    useEffect(() => {
        if (error) {
            toast.error(t(error))
            dispatch(actions.responseError(null))
        }
    }, [error, dispatch, t])

    useEffect(() => {
        if (message) {
            history.push('/login')
        }
    }, [history, message])

    const onSubmit = (values: RecoveryFormTypes) => {
        dispatch(actions.recoveryRequest(values))
    }

    return (
        <Form onFinish={onSubmit}>
            <Form.Item name="email" rules={[
                {required: true, message: t('email_required')},
                {type: 'email', message: t('email_invalid')}
            ]} validateTrigger={'onBlur'}>
                <Input placeholder={t('email_placeholder')} type="email"/>
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
