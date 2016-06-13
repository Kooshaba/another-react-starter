import $              from 'jquery'
import _              from 'lodash'
import React          from 'react'
import Provider       from 'react-router'

require('./Application.sass')

class Application extends React.Component {
  render() {
    return (
      <div className='Application'>
        { this.props.children }
      </div>
    )
  }
}

export default Application
