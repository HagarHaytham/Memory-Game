import './App.css';
import { useState } from 'react';
import Grid from './Components/Grid';
function App() {
  const [cards,setCards] = useState(Array(36).fill(1))
  return (
    <div className="App">
      <h2> Memory Game</h2>
      <Grid cards={cards}/>

    </div>
  );
}

export default App;
