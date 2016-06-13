import React          from 'react'
import { createStore,
  applyMiddleware }  from 'redux'
import { Provider }   from 'react-redux'
import thunk          from 'redux-thunk'
import Reducer        from './Reducers/Reducer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(Reducer)

export const renderInRedux = (element) => {
  return (
    <Provider store={store}>
      { element }
    </Provider>
  )
}
