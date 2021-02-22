import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'

import {rootReducer} from './redux/root-reduser'
// import {fetchAllChampions} from './redux/sagas'

import App from './components/app'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

// const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
// sagaMiddleware.run(fetchAllChampions)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
