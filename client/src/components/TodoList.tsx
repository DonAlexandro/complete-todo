import React, {useEffect} from 'react'
import {List} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '@redux/rootReducer'
import {actions} from '../redux/todo/actions'
import {TodoListItem} from "./TodoListItem"

export const TodoList: React.FC = () => {
    const {tasks, foundTasks} = useSelector((state: AppStateType) => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.fetchRequest())
    }, [dispatch])

    return (
        <List
            itemLayout="horizontal"
            size="large"
            dataSource={foundTasks.length ? foundTasks : tasks}
            locale={{emptyText: 'Завдань немає'}}
            renderItem={item =>
                <TodoListItem item={item} />
            }
        />
    )
}
