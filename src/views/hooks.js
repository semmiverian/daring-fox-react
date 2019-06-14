import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Custom Hooks
function useSwapiApi(peopleId) {

}

export default function Hook() {
  const [state, setState] = useState()

  const [name, setName] = useState('Kosasih')
  const [gender, setGender] = useState('Questionable')
  const [age, setAge] = useState(17)
  const [data, setData] = useState({})
  const [peopleId, setPeopleId] = useState(1)

  const wrapperSetName = e => {
    setName(e.target.value)
  }

  useEffect(() => {
    console.log('auououoouo')

    axios.get(`https://swapi.co/api/people/${peopleId}`)
        .then(({data}) => {
          setData(data)
        })
    // hit APi
  }, [peopleId])

  return (
    <div>
      <h1>Noel bersin bersin {state}</h1>
      <h3>{JSON.stringify(data)}</h3>
      {/* <h3>{gender}</h3>
      <h3>{age}</h3> */}

      {/* <input type="text" onChange={wrapperSetName}
            value={name}
      /> */}
      {/* <input type="text" onChange={e => setGender(e.target.value)}
            value={gender}
      />
      <input type="text" onChange={e => setAge(e.target.value)}
            value={age}
      /> */}
      <h4>{peopleId}</h4>
      <button onClick={e => setPeopleId(peopleId + 1)}>Increment People Id</button>
    </div>
  )
}
