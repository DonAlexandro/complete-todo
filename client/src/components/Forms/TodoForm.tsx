import React from 'react'
import {Form, Input} from 'antd'
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {actions} from '../../redux/todo/actions'
import {AppStateType} from '../../redux/rootReducer'

export type TodoFormTypes = {
    title: string
}

export const TodoForm: React.FC = () => {
    const {loading} = useSelector((state: AppStateType) => state.todo)
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const [form] = Form.useForm()

    const onSubmit = (values: TodoFormTypes) => {
        if (values.title.length) {
            dispatch(actions.createRequest(values))
            form.resetFields()
        }
    }

    return (
        <Form onFinish={onSubmit} form={form}>
            <Form.Item name="title">
                <Input
                    addonBefore={loading ? <LoadingOutlined /> : <PlusOutlined />}
                    placeholder={t('todo_placeholder')}
                    size="large"
                    disabled={loading}
                />
            </Form.Item>
        </Form>
    )
}