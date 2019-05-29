const defaultState = {
  counter: 10
}

function reducer(state = defaultState, action) {
  switch(action.type) {
    case 'INCREMENT_COUNTER': {
      return {
        counter: state.counter + action.payload
      }
    }
    case 'DECREMENT_COUNTER': {
      return {
        counter: state.counter - 1
      }
    }
    default:
      return state
  }
}

export default reducer