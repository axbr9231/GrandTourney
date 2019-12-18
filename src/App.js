import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {

  const [numTeams, setNumTeams] = useState(0); 

  const handleNumTeams = () => {
    setNumTeams(numTeams + 1)
  }

  return (
    <div>
      <p onClick={() => handleNumTeams()}>{numTeams}</p>

    </div>
  )
}

export default App;
