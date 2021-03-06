import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Layout} from 'antd'
import {useRoutes} from './hooks/routes'
import {Navbar} from './components/Navbar'

const { Content } = Layout

const App: React.FC = () => {
    const routes = useRoutes(false)

    return (
        <Router>
            <Layout>
                <Navbar isAuthenticated={false}/>
                <Content style={{marginTop: 64, padding: '0 50px'}}>
                    {routes}
                </Content>
            </Layout>
        </Router>
    )
}

export default App
