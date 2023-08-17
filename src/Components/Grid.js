import Card from "./Card"
const Grid = ({cards,handleChoice}) => {
  return (
    <div className="grid-container">

    {cards.map((card)=> 
      <Card key ={card.id} card ={card} handleChoice={handleChoice}/>)}

    </div>
  )
}

export default Grid