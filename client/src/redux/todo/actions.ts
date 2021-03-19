import {
    BASE_REQUEST,
    BaseRequestType,
    CREATE_REQUEST,
    CREATE_SUCCESS,
    CreateRequestType,
    CreateSuccessType,
    DELETE_REQUEST,
    DELETE_SUCCESS,
    DeleteRequestType,
    DeleteSuccessType,
    EDIT_REQUEST,
    EDIT_SUCCESS,
    EditRequestType,
    EditSuccessType,
    EditTodoType,
    ERROR_RESPONSE,
    ErrorResponseType,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FetchRequestType, FetchSuccessPayloadType,
    FetchSuccessType, SEARCH_REQUEST,
    SearchRequestType,
    TodoType
} from './types'
import {TodoFormTypes} from '../../components/Forms/TodoForm'

export const actions = {
    baseRequest: (): BaseRequestType => ({
        type: BASE_REQUEST
    }),
    createRequest: (body: TodoFormTypes): CreateRequestType => ({
        type: CREATE_REQUEST,
        payload: body
    }),
    fetchRequest: (page: number): FetchRequestType => ({
        type: FETCH_REQUEST,
        payload: page
    }),
    deleteRequest: (id: string): DeleteRequestType => ({
        type: DELETE_REQUEST,
        payload: id
    }),
    editRequest: (todo: EditTodoType): EditRequestType => ({
        type: EDIT_REQUEST,
        payload: todo
    }),
    searchRequest: (title: string): SearchRequestType => ({
        type: SEARCH_REQUEST,
        payload: title
    }),
    fetchSuccess: (data: FetchSuccessPayloadType): FetchSuccessType => ({
        type: FETCH_SUCCESS,
        payload: data
    }),
    createSuccess: (todo: TodoType): CreateSuccessType => ({
        type: CREATE_SUCCESS,
        payload: todo
    }),
    deleteSuccess: (id: string): DeleteSuccessType => ({
        type: DELETE_SUCCESS,
        payload: id
    }),
    editSuccess: (todo: TodoType): EditSuccessType => ({
        type: EDIT_SUCCESS,
        payload: todo
    }),
    errorResponse: (error: string | null): ErrorResponseType => ({
        type: ERROR_RESPONSE,
        payload: error
    })
}
