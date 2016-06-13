import React             from 'react'
import { connect }       from 'react-redux'
import { defaultAction } from '../../Actions'

require('./Main.sass')

class Main extends React.Component {
  render() {
    let { number } = this.props

    return (
      <div className='main'>
        <button className='click-me' onClick={() => this.props.dispatch(defaultAction({number: number + 1}))}>
          Click Me
        </button>

        <p className='counter'>
          { number }
        </p>
      </div>
    )
  }
}

function select(state) {
  return {
    number: state.number
  }
}

export default connect(select)(Main)
