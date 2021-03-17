import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Layout} from 'antd'
import {useCookies} from 'react-cookie'
import {useRoutes} from './hooks/routes'
import {Navbar} from './components/Navbar'
import {useAuth} from './hooks/useAuth'
import {AuthContext} from './context/AuthContext'

const { Content } = Layout

const App: React.FC = () => {
    const {login, logout} = useAuth()
    const [cookies] = useCookies()

    const isAuthenticated = !!cookies?.token
    const routes = useRoutes(isAuthenticated)

    return (
        <AuthContext.Provider value={{login, logout}}>
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
