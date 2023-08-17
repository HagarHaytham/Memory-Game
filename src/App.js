import './App.css';
import { useState ,useEffect} from 'react';
import Grid from './Components/Grid';



function App() {
  const [cards,setCards] = useState([])
  const [firstCard,setFirstCard] = useState(null)
  const [secondCard,setSecondCard] = useState(null)

  useEffect(()=>{
    const checkMatch = () =>{
      if(firstCard && secondCard){
        if(firstCard.number !==secondCard.number){
          console.log(' Not a match')
          
         
          setTimeout(()=>setCards(cards.map((card)=> card.id === firstCard.id || card.id === secondCard.id ?{...card,flipped:false}:card)) ,1000) 
        }
        resetCards()
        
           
      } 
    }
    checkMatch()
  },[firstCard,secondCard])



  const resetCards =() =>{
    setFirstCard(null)
    setSecondCard(null)
  }
  

  const generateCards= ()=>{
    const side = 6;
    const size = side*side;
    const numbers = size/2;
    let cards =[];
    for (let i=1;i<=numbers;i++){
      for (let j=0;j<2;j++){
        cards.push({'number': i, id: Math.random(),flipped:false})
      }
    }
    const randomizedCards = cards.sort(()=> Math.random()-0.5)
    console.log(randomizedCards)
    setCards(randomizedCards)
    setFirstCard(null)
    setSecondCard(null)
    
  }



  const handleChoice= (cardChoosen) => {

    console.log(cardChoosen)
    firstCard ? setSecondCard(cardChoosen) : setFirstCard(cardChoosen)
    setCards(cards.map((card)=> card.id === cardChoosen.id ?{...card,flipped:true}:card))
    
  }




  return (
    <div className="App">
      <h2> Memory Game</h2>
      <button onClick={generateCards}>Start New Game</button>

      <Grid cards={cards} handleChoice={handleChoice}/>

    </div>
  );
}

export default App;
