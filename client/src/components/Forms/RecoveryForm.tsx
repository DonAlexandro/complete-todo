import React, {useEffect} from 'react'
import {Button, Form, Input, message as toast} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {actions} from '../../redux/auth/recovery/actions'
import {AppStateType} from '@redux/rootReducer'

export type RecoveryFormTypes = {
    email: string
}

export const RecoveryForm: React.FC = () => {
    const {error, loading, message} = useSelector((state: AppStateType) => state.recovery)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(actions.responseError(null))
        }
    }, [error, dispatch])

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
                {required: true, message: 'Ти забув ввести Email'},
                {type: 'email', message: 'Email не коректний'}
            ]} validateTrigger={'onBlur'}>
                <Input placeholder="Твій Email" type="email"/>
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
