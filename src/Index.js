import React     from 'react'
import ReactDOM  from 'react-dom'

import { Router, hashHistory } from 'react-router'

import Application from './Components/Application/Application.jsx'
import Main        from './Components/Main/Main.jsx'

import { renderInRedux } from './Utils'

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
      renderInRedux(<Router history={hashHistory} routes={routes} />)
    )
  }
}

export default Index

ReactDOM.render(
  <Index/>,
  document.getElementById('react-content')
)
