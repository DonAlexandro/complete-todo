import React from 'react'
import {Typography} from 'antd'
import {useTranslation} from 'react-i18next'
import {TodoForm} from '../components/Forms/TodoForm'
import {TodoList} from '../components/TodoList'

const {Title} = Typography

export const Todos: React.FC = () => {
    const {t} = useTranslation()

    return (
        <div className="main-wrapper">
            <Title level={3}>{t('tasks')}</Title>
            <TodoForm />
            <TodoList />
        </div>
    )
}
