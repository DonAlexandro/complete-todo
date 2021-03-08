import React from 'react'
import {Menu, Layout, Typography} from 'antd'
import {NavLink} from 'react-router-dom'

const {Header} = Layout
const {Title} = Typography

const logoutHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
}

type NavbarTypes = {
    isAuthenticated: boolean
}

export const Navbar: React.FC<NavbarTypes> = ({isAuthenticated}) => {
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
                        <Menu.Item key="todos">
                            <a href="/" onClick={logoutHandler}>Вийти</a>
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
