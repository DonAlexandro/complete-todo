import React, {useEffect, useState} from 'react'
import {Button, List} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {AppStateType} from '@redux/rootReducer'
import {actions} from '../redux/todo/actions'
import {TodoListItem} from "./TodoListItem"

export const TodoList: React.FC = () => {
    const [page, setPage] = useState(1)

    const {tasks, todosCount, foundTasks} = useSelector((state: AppStateType) => state.todo)
    const dispatch = useDispatch()
    const {t} = useTranslation()

    useEffect(() => {
        dispatch(actions.fetchRequest(page))
    }, [dispatch, page])

    const loadMode =
        todosCount !== tasks.length ?
            <Button
                className="load-more"
                onClick={() => setPage(prev => prev + 1)}
            >{t('load_more')}</Button>
        :
            <></>

    return (
        <List
            itemLayout="horizontal"
            size="large"
            dataSource={foundTasks.length ? foundTasks : tasks}
            locale={{emptyText: t('todos_empty')}}
            loadMore={loadMode}
            renderItem={item =>
                <TodoListItem item={item} />
            }
        />
    )
}
