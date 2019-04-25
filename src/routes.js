import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { myStore } from './store'

// Components
import Navbar from './components/Navbar'

// Pages

import App from './containers/App'
import Add from './containers/Add'

const Routes = ({}) => (
    <>
        <Provider store={myStore.store}>
            <PersistGate persistor={myStore.persistor}>
                <Router>
                    <Navbar />

                    <Route exact path='/' component={App} />
                    <Route exact path='/add' component={Add} />
                </Router>
            </PersistGate>
        </Provider>
    </>
);

export default Routes
