import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName}){
    const [isEditing, setIsEditing] = useState(false)
    const [nameValue, setPlayerName] = useState(name)

    function handleEditClick() {
        setIsEditing( (editing) => !editing )

        if(isEditing && onChangeName){
          onChangeName(symbol,nameValue)
          // console.log({nameValue})
        }        
      }    

    function handlePlayerNameChange(event){
        setPlayerName(event.target.value)
        // console.log({nameValue})
    }

    return (
      <li className={isActive ? 'active': undefined}>
        <span className="player">
          {isEditing ? <input  type="text" value={nameValue} required onChange={handlePlayerNameChange}></input> : <span className="player-name">{nameValue}</span> }
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick} >{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    )
}