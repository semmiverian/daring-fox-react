import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import axios from 'axios'

// before arrow function attack
// function logger() {
//   return function (store) {
//     return function (next) {
//       return function (action) {

//       }
//     }
//   }
// }

const logger = store => next => action => {
  console.log('logger ku jalan sebelum action', action)
  next(action)
  console.log('lgger ku jalan sesudah action', store.getState())
}

const api = store => next => action => {
  console.log('api dimulai')

  if (action.type === 'HIT_API') {
    // hit axios
    next({
      type: 'API_LOADING'
    })

    axios.get(action.url)
         .then(({data}) => {
          next({
            ...action,
            type: 'SUCCESS_HIT_API',
            payload: data
          })
         })
         .catch(err => {
          next({
            type: 'ERROR_HIT_API',
            payload: err
          })
         })
  } else {
    next(action)
  }
}



const store = createStore(reducer, applyMiddleware(logger, thunk, api))

export default store