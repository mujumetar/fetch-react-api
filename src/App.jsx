import { useState, useEffect } from 'react'
import './App.css'
import { Table } from './components/Table'


function App() {
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])


  function Fetchapi() {
    fetch(`https://randomuser.me/api/?results=500&nat=in&?gender=male`)
      .then((res) => res.json())
      .then((res) => setData(res.results),
    console.log(data))
  }

  useEffect(() => {
    Fetchapi()
  }, [count])



  return (
    <>
      <Table data={data} />
      <button onClick={() => {setCount(count + 1) }}>fetch</button>


    </>
  )
}

export default App
