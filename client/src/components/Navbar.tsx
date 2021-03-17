import React, {ChangeEvent, useContext} from 'react'
import {Form, Input, Layout, Menu, Typography} from 'antd'
import {SearchOutlined, TranslationOutlined} from '@ant-design/icons'
import {NavLink, useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {useCookies} from 'react-cookie'
import {AuthContext} from '../context/AuthContext'
import {actions} from '../redux/todo/actions'

const {Header} = Layout
const {SubMenu} = Menu
const {Title} = Typography

type NavbarTypes = {
    isAuthenticated: boolean
}

export const Navbar: React.FC<NavbarTypes> = ({isAuthenticated}) => {
    const history = useHistory()
    const {logout} = useContext(AuthContext)
    const dispatch = useDispatch()
    const {t, i18n} = useTranslation()
    const [, setCookie] = useCookies(['language'])

    const logoutHandler = () => {
        logout()
        history.push('/login')
        dispatch(actions.fetchSuccess([]))
    }

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.searchRequest(e.target.value))
    }

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
        setCookie('language', language, {
            path: '/'
        })
    }

    return (
        <Header style={{position: 'fixed', zIndex: 1, width: '100%'}} className="header">
            <div className={`logo ${!isAuthenticated && 'grow-1'}`}>
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
                <SubMenu popupOffset={[3, 3]} key="language" title={<TranslationOutlined style={{margin: '0 1rem'}}/>}>
                    <Menu.Item key="en" onClick={() => changeLanguage('en')}>English</Menu.Item>
                    <Menu.Item key="ua" onClick={() => changeLanguage('ua')}>Українська</Menu.Item>
                </SubMenu>
                {isAuthenticated ?
                    <>
                        <Menu.Item key="todos">
                            <NavLink to="/" exact>{t('tasks')}</NavLink>
                        </Menu.Item>
                        <Menu.Item key="logout" onClick={logoutHandler}>{t('logout')}</Menu.Item>
                    </>
                    :
                    <>
                        <Menu.Item key="login">
                            <NavLink to="/login" exact>{t('login')}</NavLink>
                        </Menu.Item>
                        <Menu.Item key="signup">
                            <NavLink to="/signup" exact>{t('signup')}</NavLink>
                        </Menu.Item>
                    </>
                }
            </Menu>
        </Header>
    )
}
