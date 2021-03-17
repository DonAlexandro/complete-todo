import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {CookiesProvider} from 'react-cookie'
import {Spin} from 'antd'
import './index.scss'
import App from './App'
import {store} from './redux/store'
import './i18n'

ReactDOM.render(
    <Provider store={store}>
        <CookiesProvider>
            <Suspense fallback={<div className="preloader"><Spin size="large"/></div>}>
                <App />
            </Suspense>
        </CookiesProvider>
    </Provider>,
    document.getElementById('root')
)
