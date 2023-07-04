import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [prompt,setPrompt] = useState('')
  const [response,setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      console.log('handlesubmit called')
      const response = await axios.post("http://localhost:8080/slang" ,{prompt})
      console.log(response)
      const data = await response.data 
      console.log(data)
      setResponse(data)
    }
    
    catch(error){
      console.error(error)
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h3>Enter your question?</h3>
        <input type='text' value={prompt} onChange={(e)=> setPrompt(e.target.value)}></input>
        <button type='submit'>Search</button>
      </form>
      <h3>{response}</h3>
    </div>
  )
}

export default App
