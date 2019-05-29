import axios from 'axios'

export function incrementCounter(payload = 1) {
  return {
    type: 'INCREMENT_COUNTER',
    payload: 1
  }
}

export function decrementCounter() {
  return {
    type: 'DECREMENT_COUNTER'
  }
}

export function swapiApi() {
  return {
    type: 'HIT_API',
    url: 'https://swapi.co/api/people/1',
    key: 'swapi'
  }
}


// export function swapiApi() {
//   return dispatch => {

//     dispatch({
//       type: 'API_LOADING'
//     })

//     axios.get('https://swapi.co/api/people/1')
//          .then(({data}) => {
//             // dispatch success hit api
//             // extract menjadi fungsi sendiri
//             // dispatch(successHitApi(data))

//             // langsung kirim objectnya
//             dispatch({
//               type: 'SUCCESS_HIT_API',
//               payload: data
//             })
//          }) 
//          .catch(err => {
//            // dispatch error hit api
//            dispatch({
//              type: 'ERROR_HIT_API',
//              payload: err
//            })
//          })
//   }
// }

export function successHitApi(payload) {
  return {
    type: 'SUCCESS_HIT_API',
    payload
  }
}

