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

