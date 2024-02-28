import { useState } from "react"

export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(!isEditing)
      }    

    return (
      <li>
        <span className="player">
          {isEditing ? <input  type="text" defaultValue={name} required ></input> : <span className="player-name">{name}</span> }
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick} >{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    )
}