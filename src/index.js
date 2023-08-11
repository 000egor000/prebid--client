import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './fonts/circe/styleFonts.css'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
