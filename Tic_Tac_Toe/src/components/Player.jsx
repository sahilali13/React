import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleSave(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className='player'>
        {!isEditing ? (
          <span className='player-name'>{playerName}</span>
        ) : (
          <input
            type='text'
            required
            value={playerName}
            onChange={handleSave}
          />
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
