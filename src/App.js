import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Home from './components/Home'
import Definition from './components/Definition'
import { Switch, Route, useHistory } from 'react-router';

function App() {
  const [def, setDef] = useState(null)

  const history = useHistory()

  const getDef = async (word) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
    const data = await response.json()
    setDef(data)
    history.push("/def")
  }
  

  return (
    <div className="App">
      <Header />
      <Form getDef={getDef} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/def">
          <Definition def={def}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
