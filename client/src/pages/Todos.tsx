import React from 'react'
import {Typography} from 'antd'
import {TodoForm} from '../components/Forms/TodoForm'
import {TodoList} from '../components/TodoList'

const {Title} = Typography

export const Todos: React.FC = () => {
    return (
        <div className="main-wrapper">
            <Title level={3}>Задачі</Title>
            <TodoForm />
            <TodoList />
        </div>
    )
}
