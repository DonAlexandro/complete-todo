import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Checkbox, List, Typography, Modal, Tooltip} from 'antd'
import {DeleteFilled} from '@ant-design/icons'
import {TodoType} from '@redux/todo/types'
import {actions} from '../redux/todo/actions'
import {AppStateType} from "@redux/rootReducer";

const {Paragraph} = Typography
const {confirm} = Modal

type TodoListItemTypes = {
    item: TodoType
}

export const TodoListItem: React.FC<TodoListItemTypes> = ({item}) => {
    const {loading} = useSelector((state: AppStateType) => state.todo)
    const dispatch = useDispatch()

    const confirmDelete = () => {
        confirm({
            title: item.title,
            content: 'Ти дійсно хочеш видалити це завдання? Повернути його вже буде не можливо',
            okText: 'Видалити',
            cancelText: 'Скасувати',
            okButtonProps: {
                danger: true
            },
            onOk: () => {
                dispatch(actions.deleteRequest(item._id))
            },
            onCancel: () => {}
        })
    }

    const editTask = (title: string) => {
        dispatch(actions.editRequest({id: item._id, title}))
    }

    const checkTask = (done: boolean) => {
        dispatch(actions.editRequest({id: item._id, done}))
    }

    return (
        <List.Item>
            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                <Tooltip title="Відмітити як завершене">
                    <Checkbox
                        onChange={() => checkTask(!item.done)}
                        checked={item.done}
                        disabled={loading}
                    />
                </Tooltip>
                <Paragraph
                    editable={{onChange: editTask, tooltip: 'Змінити'}}
                    style={{marginBottom: 0, marginLeft: '.5rem'}}
                >{item.title}</Paragraph>
            </div>
            <Button danger icon={<DeleteFilled />} onClick={confirmDelete}/>
        </List.Item>
    )
}
