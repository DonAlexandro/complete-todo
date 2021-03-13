import React, {useContext} from 'react'
import {Layout, Menu, Typography} from 'antd'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";

const {Header} = Layout
const {Title} = Typography

type NavbarTypes = {
    isAuthenticated: boolean
}

export const Navbar: React.FC<NavbarTypes> = ({isAuthenticated}) => {
    const history = useHistory()
    const {logout} = useContext(AuthContext)

    const logoutHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        logout()
        history.push('/login')
    }

    return (
        <Header style={{position: 'fixed', zIndex: 1, width: '100%'}} className="header">
            <div className="logo">
                <Title className="title" level={4}>☑ Complete Todo</Title>
            </div>
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
