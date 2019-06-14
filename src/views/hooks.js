import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Custom Hooks
function useSwapiApi(peopleId) {
  const [data, setData] = useState({})

  useEffect(() => {
    console.log('auououoouo')

    axios.get(`https://swapi.co/api/people/${peopleId}`)
        .then(({data}) => {
          setData(data)
        })
    // hit APi
  }, [peopleId])

  return [
    data
  ]
}

function useApi(method, url) {
  // data, error, loading
  const [data, setData] = useState({})
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios({
      method,
      url
    })
    .then(({data}) => {
      setData(data)
    })
    .catch(err => {
      setError(err)
    })
    .finally(() => setLoading(false))
  }, [url])

  return [data, loading, error]
}

export default function Hook() {
  const [state, setState] = useState()

  const [name, setName] = useState('Kosasih')
  const [gender, setGender] = useState('Questionable')
  const [age, setAge] = useState(17)
  const [peopleId, setPeopleId] = useState(1)

  // const [data] = useSwapiApi(peopleId)

  const [data, loading, error] = useApi('get', `https://swapi.co/api/people/${peopleId}`)

  return (
    <>
      <h1>masa bisa sih?</h1>
      <div>
      <h1>Noel bersin bersin {state}</h1>
      {
        loading && <h3>Sebentar ya mas lagi diproses</h3>
      }

      {
        !loading && data && Object.keys(data).length !== 0 && <h3>{JSON.stringify(data)}</h3>
      }

      {/* {
        !loading && error && <h3>{JSON.stringify(error)}</h3>
      } */}
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
    </>
  )
}
