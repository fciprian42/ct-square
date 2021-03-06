import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRoutes } from 'redux-first-router'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import storage from 'redux-persist/lib/storage'


import contactsReducer from './reducers/contactsReducer'

const history = createBrowserHistory()
const routes = {home: '/', add: '/add'};

const { reducer, middleware } = connectRoutes(history, routes);

const persistConfig = {
  key: 'root',
  storage,
}

const store = createStore(
  combineReducers({location: reducer, contacts: persistReducer(persistConfig, contactsReducer)}),
  {},
  compose(applyMiddleware(thunk, middleware))
);


let persistor = persistStore(store)

export const myStore = {
  persistor,
  store
}