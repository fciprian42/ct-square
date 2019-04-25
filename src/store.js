import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRoutes } from 'redux-first-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

import contactsReducer from './reducers/contactsReducer'

const history = createBrowserHistory()
const routes = {home: '/', add: '/add', contact: '/contact/id'};

const { reducer, middleware } = connectRoutes(history, routes);

const store = createStore(
  combineReducers({location: reducer, contacts: contactsReducer}),
  {},
  compose(applyMiddleware(thunk, middleware))
);

export default store;