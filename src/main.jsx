import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reducer from './redux/reducer.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
  </Provider>,
)
