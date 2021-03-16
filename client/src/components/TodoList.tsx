import React, {useEffect} from 'react'
import {List} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {AppStateType} from '@redux/rootReducer'
import {actions} from '../redux/todo/actions'
import {TodoListItem} from "./TodoListItem"

export const TodoList: React.FC = () => {
    const {tasks, foundTasks} = useSelector((state: AppStateType) => state.todo)
    const dispatch = useDispatch()
    const {t} = useTranslation()

    useEffect(() => {
        dispatch(actions.fetchRequest())
    }, [dispatch])

    return (
        <List
            itemLayout="horizontal"
            size="large"
            dataSource={foundTasks.length ? foundTasks : tasks}
            locale={{emptyText: t('todos_empty')}}
            renderItem={item =>
                <TodoListItem item={item} />
            }
        />
    )
}
