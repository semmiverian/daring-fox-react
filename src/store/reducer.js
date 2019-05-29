const defaultState = {
  counter: 10,
  data: [],
  swapi: [],
  loading: false,
  error: {}
}

function reducer(state = defaultState, action) {
  console.log(action)
  switch(action.type) {
    case 'INCREMENT_COUNTER': {
      return {
        ...state,
        counter: state.counter + action.payload
      }
    }
    case 'DECREMENT_COUNTER': {
      return {
        ...state,
        counter: state.counter - 1
      }
    }
    case 'SUCCESS_HIT_API': {
      return {
        ...state,
        [action.key]: action.payload,
        loading: false
      }
    }
    case 'API_LOADING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'ERROR_HIT_API': {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }
    default:
      return state
  }
}

export default reducer