import { useEffect, useState } from 'react'
import './App.css'
import { UseCard } from './components/UseCard/UseCard'

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const rs = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonRs = await rs.json()
    setData(jsonRs)
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      <UseCard data={data}/>
    </>
  )
}

export default App
