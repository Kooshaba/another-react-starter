import _ from 'lodash'

const initialState = {
  number: 0
}

export default function (state = initialState, action) {
  const assignState = _.assign.bind(this, {}, state)

  switch(action.type) {
    case 'DEFAULT_ACTION':
      return assignState(action.payload)

    default:
      return state
  }
}
