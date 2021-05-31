import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'

function App() {
  const [def, setDef] = useState(null)
  const [results, setResults] = useState(null)

  const getDef = async (word) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
    const data = await response.json()
    // setDef(data[0].word)
    setResults(data.map((item, index) => {
      return <h1>{data[0].word}</h1>
    }))
  }
  // console.log(def)
  

  return (
    <div className="App">
      <Header />
      <Form getDef={getDef} setResults={setResults}/>
      {results}
    </div>
  );
}

export default App;
