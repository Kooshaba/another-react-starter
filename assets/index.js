import React     from 'react'
import ReactDOM  from 'react-dom'

import { Router, hashHistory } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import { Provider }                     from 'react-redux'
import thunk                            from 'redux-thunk'

import Reducer     from './Reducers/Reducer'
import Application from './Components/Application/Application.jsx'
import Main        from './Components/Main/Main.jsx'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(Reducer)

const routes = {
  path: '#',
  component: Application,
  childRoutes: [
    { path: '/*', component: Main }
  ]
}

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
      </Provider>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('react-content')
)
