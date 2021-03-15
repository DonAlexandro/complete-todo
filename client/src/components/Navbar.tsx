import React, {ChangeEvent, useContext} from 'react'
import {Form, Input, Layout, Menu, Typography} from 'antd'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {SearchOutlined} from '@ant-design/icons'
import {useDispatch} from 'react-redux'
import {actions} from '../redux/todo/actions'

const {Header} = Layout
const {Title} = Typography

type NavbarTypes = {
    isAuthenticated: boolean
}

export const Navbar: React.FC<NavbarTypes> = ({isAuthenticated}) => {
    const history = useHistory()
    const {logout} = useContext(AuthContext)

    const dispatch = useDispatch()

    const logoutHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        logout()
        history.push('/login')
    }

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.searchRequest(e.target.value))
    }

    return (
        <Header style={{position: 'fixed', zIndex: 1, width: '100%'}} className="header">
            <div className="logo">
                <Title className="title" level={5}>☑ Complete Todo</Title>
            </div>
            {isAuthenticated &&
                <div className="search">
                    <Form>
                        <Form.Item>
                            <Input onChange={onSearch} prefix={<SearchOutlined />} allowClear/>
                        </Form.Item>
                    </Form>
				</div>
            }
            <Menu theme="dark" mode="horizontal">
                {isAuthenticated ?
                    <>
                        <Menu.Item key="todos">
                            <NavLink to="/" exact>Задачі</NavLink>
                        </Menu.Item>
                        <Menu.Item key="logout">
                            <a href="/logout" onClick={logoutHandler}>Вийти</a>
                        </Menu.Item>
                    </>
                    :
                    <>
                        <Menu.Item key="login">
                            <NavLink to="/login" exact>Вхід</NavLink>
                        </Menu.Item>
                        <Menu.Item key="signup">
                            <NavLink to="/signup" exact>Реєстрація</NavLink>
                        </Menu.Item>
                    </>
                }
            </Menu>
        </Header>
    )
}
