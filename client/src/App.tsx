import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Layout, Spin} from 'antd'
import {useRoutes} from './hooks/routes'
import {Navbar} from './components/Navbar'
import {useAuth} from './hooks/useAuth'
import {AuthContext} from './context/AuthContext'

const { Content } = Layout

const App: React.FC = () => {
    const {ready, token, login, logout} = useAuth()

    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Spin size="large"/>
    }

    return (
        <AuthContext.Provider value={{token, login, logout}}>
            <Router>
                <Layout>
                    <Navbar isAuthenticated={isAuthenticated}/>
                    <Content style={{marginTop: 64, padding: '0 50px'}}>
                        {routes}
                    </Content>
                </Layout>
            </Router>
        </AuthContext.Provider>
    )
}

export default App
