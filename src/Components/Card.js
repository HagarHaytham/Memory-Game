
const Card = ({card,handleChoice}) => {

    const handleClick= ()=>{
        handleChoice(card)

    }


  return (
    <>
    
        {card.flipped ?
        <div className="box" key ={card.id}>{card.number}</div> :
        <div className="box-back" key ={card.id} onClick={handleClick}></div>}
    
    </>
  )
}

export default Card