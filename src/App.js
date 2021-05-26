import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'

function App() {
  const key = process.env.REACT_APP_API_KEY
  const [def, setDef] = useState(null)
  const [results, setResults] = useState(null)

  const getDef = async (word) => {
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`)
    const data = await response.json()
    setDef(data)
    setResults(data.map((item, index) => {
      return <h3>{item.hwi.hw}</h3>
    }))
  }
  console.log(def)
  

  return (
    <div className="App">
      <Header />
      <Form getDef={getDef} setResults={setResults}/>
      {results}
    </div>
  );
}

export default App;
