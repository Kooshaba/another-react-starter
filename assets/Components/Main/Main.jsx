import React             from 'react'
import { connect }       from 'react-redux'
import { defaultAction } from '../../Actions'

class Main extends React.Component {
  render() {
    let { number } = this.props

    return (
      <div className='main'>
        <p onClick={() => this.props.dispatch(defaultAction({number: number + 1}))}>
          Click Me
        </p>

        { number }
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
