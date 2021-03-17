import {
    BASE_REQUEST,
    CREATE_SUCCESS,
    DELETE_SUCCESS,
    EDIT_SUCCESS,
    FETCH_SUCCESS,
    SEARCH_REQUEST,
    TodoType
} from './types'
import {InferActionsTypes} from '@redux/store'
import {actions} from './actions'

const initialState = {
    loading: false,
    error: null as string | null,
    tasks: [] as Array<TodoType>,
    foundTasks: [] as TodoType[],
    todosCount: 0
}

type InitialStateType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>

export const todoReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case BASE_REQUEST:
            return {...state, loading: true}
        case CREATE_SUCCESS:
            return {...state, loading: false, tasks: [...state.tasks, action.payload]}
        case FETCH_SUCCESS:
            const {todos, todosCount} = action.payload

            return {
                ...state,
                loading: false,
                tasks: [...state.tasks, ...todos],
                todosCount
            }
        case DELETE_SUCCESS:
            return {...state, loading: false, tasks: state.tasks.filter(task => task._id.toString() !== action.payload.toString())}
        case EDIT_SUCCESS:
            return {...state, loading: false, tasks: state.tasks.map(task => {
                if (task._id === action.payload._id) {
                    return action.payload
                }

                return task
            })}
        case SEARCH_REQUEST:
            return {
                ...state,
                loading: false,
                foundTasks: state.tasks.filter(task => task.title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        default: return state
    }
}
