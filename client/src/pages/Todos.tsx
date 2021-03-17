import React, {useEffect} from 'react'
import {Typography, message} from 'antd'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {TodoForm} from '../components/Forms/TodoForm'
import {TodoList} from '../components/TodoList'
import {AppStateType} from '@redux/rootReducer'

const {Title} = Typography

export const Todos: React.FC = () => {
    const {t} = useTranslation()
    const {error} = useSelector((state: AppStateType) => state.todo)

    useEffect(() => {
        if (error) {
            message.error(t(error))
        }
    }, [error, t])

    return (
        <div className="main-wrapper">
            <Title level={3}>{t('tasks')}</Title>
            <TodoForm />
            <TodoList />
        </div>
    )
}
