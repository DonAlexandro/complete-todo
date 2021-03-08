import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {message as toast} from 'antd'
import {AuthWrapper} from '../components/AuthWrapper'
import {AppStateType} from '../redux/rootReducer'
import {actions} from '../redux/auth/signup/actions'

export const Login: React.FC = () => {
    const {message} = useSelector((state: AppStateType) => state.signup)
    const dispatch = useDispatch()

    useEffect(() => {
        if (message) {
            toast.info(message, 3)
            dispatch(actions.signupSuccess(null))
        }
    }, [message, dispatch])

    return (
        <AuthWrapper title="Вхід">

        </AuthWrapper>
    )
}
