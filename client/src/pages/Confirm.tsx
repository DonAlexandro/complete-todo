import {Spin} from 'antd'
import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {AuthWrapper} from '../components/AuthWrapper'
import {AppStateType} from "../redux/rootReducer"
import {actions} from '../redux/auth/confirm/actions'

type ConfirmRouterPropsType = {
    id: string
}

export const Confirm: React.FC = () => {
    const id = useParams<ConfirmRouterPropsType>().id

    const {message, error, loading} = useSelector((state: AppStateType) => state.confirm)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.confirmRequest(id))
    }, [dispatch, id])

    return (
        <>
            {loading ?
                <Spin size="large" tip="Іде верифікація акаунту..."/>
                :
                <AuthWrapper title="Верифікація" subtitle={message || error}>

                </AuthWrapper>
            }
        </>
    )
}
