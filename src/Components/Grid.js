const Grid = ({cards}) => {
  return (
    <div className="grid-container">
    {cards.map((card)=>(<div className="box">{card}</div>))}

    </div>
  )
}

export default Grid